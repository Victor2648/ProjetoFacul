"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cart = [];
  var cartBtn = document.getElementById('cart-btn');
  var cartModal = document.getElementById('cart-modal');
  var cartItems = document.getElementById('cart-items');
  var cartTotal = document.getElementById('cart-total');
  var closeCartBtn = document.getElementById('close-cart');
  var filterButtons = document.querySelectorAll('.filter-btn');
  var products = document.querySelectorAll('.product'); // Atualiza a lista de itens no carrinho

  function updateCart() {
    cartItems.innerHTML = '';
    var total = 0;
    cart.forEach(function (item, index) {
      var li = document.createElement('li');
      li.innerHTML = "".concat(item.name, " - R$ ").concat(item.price.toFixed(2), " \n                        <button class=\"remove-from-cart\" data-index=\"").concat(index, "\">Remover</button>");
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
    cartBtn.textContent = "Carrinho (".concat(cart.length, ")"); // Adiciona evento para remover item do carrinho

    document.querySelectorAll('.remove-from-cart').forEach(function (button) {
      button.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
      });
    });
  } // Adiciona produtos ao carrinho


  document.querySelectorAll('.add-to-cart').forEach(function (button) {
    button.addEventListener('click', function () {
      var product = this.parentElement;
      var productName = product.querySelector('h2').textContent;
      var productPrice = parseFloat(product.getAttribute('data-price'));
      cart.push({
        name: productName,
        price: productPrice
      });
      updateCart();
    });
  }); // Filtra produtos por categoria

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = this.getAttribute('data-category');
      products.forEach(function (product) {
        var productCategory = product.getAttribute('data-category');

        if (category === 'all' || productCategory === category) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  }); // Abre o modal do carrinho

  cartBtn.addEventListener('click', function () {
    cartModal.style.display = 'block';
  }); // Fecha o modal do carrinho

  closeCartBtn.addEventListener('click', function () {
    cartModal.style.display = 'none';
  });
});
//# sourceMappingURL=index.dev.js.map
