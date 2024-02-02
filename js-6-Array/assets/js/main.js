const CART = [
    {
        title: 'Milk',
        isBuy: true,
        qty: 3,
        price: 36.50
        
    },
    {
        title: 'Beer',
        isBuy: false,
        qty: 1,
        price: 23.20
    },
    {
        title: 'Bread',
        isBuy: false,
        qty: 10,
        price: 14.50
    }
];
let editMode = false;
let editId = null;

productList();
// const sorted = CART.toSorted((a,b) =>{
//     return(a.qty-a.price) - (b.qty * b.price)
// })

function _el(id) {
    return document.getElementById(id)
}
function addToCart() {
    const title = _el('prod_title').value;
    const qty = _el('prod_qty').valueAsNumber;
    const price = _el('prod_price').valueAsNumber;
    if (title === '') {
        toast.error('Enter title')
        return;
    }
    if (isNaN(qty)) {
        toast.error('Enter quantity')
        return;
    }
    if (qty <= 0) {
        toast.error('Incorrect quantity')
        return;
    }
    if (isNaN(price)) {
        toast.error('Enter price')
        return;
    }
    if (editMode) {
        CART[editId] = {
            title,
            qty,
            price
        }
        toast.success('Product updeted')
        editMode = false;
        editId = null;
    } else {
        const prodIndex = CART.findIndex(prod => prod.title === title)
        if (prodIndex === -1) {
            CART.push({
                title,
                qty,
                price,
            })
        } else {
            CART[prodIndex].qty += qty;
        }
        toast.success('Product added')
    }
   _el('prod_title').value = '';
    _el('prod_qty').valueAsNumber = 1;
    _el('prod_price').value = '';
    toast.success('Product added');
    productList()
}
function productList() {
    let tbody = '';
    sortList();
    CART.forEach((prod, index) => {
        const badge = prod.isBuy ? '<span class="badge text-bg-success">Yes</span>' : '<span class="badge text-bg-danger">No</span>'
        tbody += `<tr>
            <td>${index + 1}</td>
            <td>${prod.title}</td>
            <td>${badge}</td>
            <td>
            <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index},'dec')">-</button>
            <input type="text" class="form-control" value="${prod.qty}">
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index},'inc')">+</button>
        </div>
        </td>
            <td>${prod.price.toFixed(2)}</td>
            <td>${(prod.qty * prod.price).toFixed(2)}</td>
            <td>`
            if(!prod.isBuy){
            tbody += `
            <button type='button' class='btn btn-info btn-sm' onclick='editProd(${index})'>edit</button>
            <button type='button' class='btn btn-primary btn-sm' onclick='buyProd(${index}, "${prod.title}")'>buy</button>
            <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(${index}, "${prod.title}")'>remove</button>`
        }
            tbody += `</td>
        </tr>`
    })
    _el('cart_tbody').innerHTML = tbody;
    const disc = calcDisc()
    _el('cart_total').innerHTML = (sumProduct() - disc).toFixed(2);
    _el('cart_disc').innerHTML = disc.toFixed(2)
}
function buyProd(index,title){
    if (confirm(`Do you want to buy ${title}?`)) {
        CART[index].isBuy = true;
        productList();
        toast.success('Product bought')
    } 
}

function editProd(index) {
    const prod = CART[index]
    editMode = true;
    editId = index;

    _el('prod_title').value = prod.title;
    _el('prod_qty').valueAsNumber = prod.qty;
    _el('prod_price').value = prod.price;
}

function deleteProd(index, title) {
    if (confirm(`Do you want to delete product ${title}?`)) {
        CART.splice(index, 1);
        productList();
        toast.success('Product was deleted')
    }
}
function sumProduct() {
    return CART.reduce((accum, prod) => accum + prod.qty * prod.price, 0);
}
function changeQty(index, action) {
    let qtyFirst = CART[index].qty;
    CART[index].isBuy = false;
    if (action === 'inc') {
        CART[index].qty++;
    } else if (action === 'dec') {
        if (qtyFirst === 1) {
            deleteProd(index, CART[index].title);
        } else {
            CART[index].qty--;
        }
    }
    productList();
}

function applyDisc() {
       const amount = _el('disc_amount').valueAsNumber;
    if (isNaN(amount)) {
        toast.error('Enter discount')
        return
    }
    productList();
}

function calcDisc(){
    const type = _el('disc_type').value;
    const amount = _el('disc_amount').valueAsNumber || 0;
    let sum = sumProduct()
    if (type === "percent") {
        return sum * amount / 100
    } 
    if (type ==="fixed"){
        return amount
    }
    return 0
} 
function sortList(){
    const sort = _el('sorting').value;
//     let sortFn = () =>{};
//     if (sort === 'subTotalAsc'){
//         sortFn = (a,b) =>{
//             return (a.qty * a.price) - (b.qty * b.price)
//         }
//     }
//     if (sort === 'subTotalDesc'){
//         sortFn = (a,b) =>{
//         return (b.qty * b.price) - (a.qty * a.price) 
//     }
//  }
//     return CART.toSorted((a,b) =>sortFn(a,b))
const sortFn = {
    subTotalAsc: (a,b) =>{
                    return (a.qty * a.price) - (b.qty * b.price)
                },
    subTotalDesc:(a,b) =>{
                return (b.qty * b.price) - (a.qty * a.price) 
            },
    qtyAsc:(a,b) =>{
        return a.qty  - b.qty 
    },
    qtyDesc:(a,b) =>{
        return b.qty  - a.qty 
    },
    title: (a,b) =>{
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    }
    }
    CART.sort((a,b) =>sortFn[sort](a,b)) 
}
