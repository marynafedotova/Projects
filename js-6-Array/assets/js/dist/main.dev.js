"use strict";

var CART = [{
  title: 'milk',
  qty: 2,
  price: 25.5
}];
var editMode = false;
var editId = null;
productList();

function _el(id) {
  return document.getElementById(id);
}

function addToCart() {
  var title = _el('prod_title').value;

  var qty = _el('prod_qty').valueAsNumber;

  var price = _el('prod_price').valueAsNumber;

  if (title === '') {
    toast.error('Enter title');
    return;
  }

  if (isNaN(qty)) {
    toast.error('Enter quantity');
    return;
  }

  if (qty <= 0) {
    toast.error('Incorrect quantity');
    return;
  }

  if (isNaN(price)) {
    toast.error('Enter price');
    return;
  }

  if (editMode) {
    CART[editId] = {
      title: title,
      qty: qty,
      price: price
    };
    toast.success('Product updeted');
    editMode = false;
    editId = null;
  } else {
    var prodIndex = CART.findIndex(function (prod) {
      return prod.title === title;
    });

    if (prodIndex === -1) {
      CART.push({
        title: title,
        qty: qty,
        price: price
      });
    } else {
      CART[prodIndex].qty += qty;
    }

    toast.success('Product added');
  }

  _el('prod_title').value = '';
  _el('prod_qty').valueAsNumber = 1;
  _el('prod_price').value = '';
  toast.success('Product added');
  productList();
}

function productList() {
  var tbody = '';
  CART.forEach(function (prod, index) {
    tbody += "<tr>\n            <td>".concat(index + 1, "</td>\n            <td>").concat(prod.title, "</td>\n            <td>\n            <div class=\"input-group mb-3\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'dec')\">-</button>\n            <input type=\"text\" class=\"form-control\" value=\"").concat(prod.qty, "\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ",'inc')\">+</button>\n        </div>\n        </td>\n            <td>").concat(prod.price.toFixed(2), "</td>\n            <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n            <td>\n            <button type='button' class='btn btn-info btn-sm' onclick='editProd(").concat(index, ")'>edit</button>\n            <button type='button' class='btn btn-danger btn-sm' onclick='deleteProd(").concat(index, ", \"").concat(prod.title, "\")'>remove</button>\n            </td>\n        </tr>");
  });
  _el('cart_tbody').innerHTML = tbody;
  var disc = calcDisc();
  _el('cart_total').innerHTML = (sumProduct() - disc).toFixed(2);
  _el('cart_disc').innerHTML = disc.toFixed(2);
}

function editProd(index) {
  var prod = CART[index];
  editMode = true;
  editId = index;
  _el('prod_title').value = prod.title;
  _el('prod_qty').valueAsNumber = prod.qty;
  _el('prod_price').value = prod.price;
}

function deleteProd(index, title) {
  if (confirm("Do you want to delete product ".concat(title, "?"))) {
    CART.splice(index, 1);
    productList();
    toast.success('Product was deleted');
  }
}

function sumProduct() {
  return CART.reduce(function (accum, prod) {
    return accum + prod.qty * prod.price;
  }, 0);
}

function changeQty(index, action) {
  var qtyFirst = CART[index].qty;

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
  var amount = _el('disc_amount').valueAsNumber;

  if (isNaN(amount)) {
    toast.error('Enter discount');
    return;
  }

  productList();
}

function calcDisc() {
  var type = _el('disc_type').value;

  var amount = _el('disc_amount').valueAsNumber || 0;
  var sum = sumProduct();

  if (type === "percent") {
    return sum * amount / 100;
  }

  if (type === "fixed") {
    return amount;
  }

  return 0;
}