const CART = [{
        title: 'milk',
        qty: 2,
        price: 25.5
    }

]
let editMode = false;
let editId = null;

productList();

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
    CART.forEach((prod, index) => {
        tbody += `<tr>
            <td>${index + 1}</td>
            <td>${prod.title}</td>
            <td>
            <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index},'dec')">-</button>
            <input type="text" class="form-control" value="${prod.qty}">
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index},'inc')">+</button>
        </div>
        </td>
            <td>${prod.price.toFixed(2)}</td>
            <td>${(prod.qty * prod.price).toFixed(2)}</td>
            <td>
            <button type='button' class='btn btn-info btn-sm' onclick='editProd(${index})'>edit</button>
            <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(${index}, "${prod.title}")'>remove</button>
            </td>
        </tr>`;
    })
    _el('cart_tbody').innerHTML = tbody;
    const disc = calcDisc()
    _el('cart_total').innerHTML = (sumProduct() - disc).toFixed(2);
    _el('cart_disc').innerHTML = disc.toFixed(2)

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