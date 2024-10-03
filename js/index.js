document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCartBtn = document.getElementById('close-cart');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product');
  
    // Atualiza a lista de itens no carrinho
    function updateCart() {
      cartItems.innerHTML = '';
      let total = 0;
  
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} 
                        <button class="remove-from-cart" data-index="${index}">Remover</button>`;
        cartItems.appendChild(li);
        total += item.price;
      });
  
      cartTotal.textContent = total.toFixed(2);
      cartBtn.textContent = `Carrinho (${cart.length})`;
  
      // Adiciona evento para remover item do carrinho
      document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', function() {
          const index = this.getAttribute('data-index');
          cart.splice(index, 1);
          updateCart();
        });
      });
    }
  
    // Adiciona produtos ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.getAttribute('data-price'));
  
        cart.push({ name: productName, price: productPrice });
        updateCart();
      });
    });
  
    // Filtra produtos por categoria
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        products.forEach(product => {
          const productCategory = product.getAttribute('data-category');
          if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  
    // Abre o modal do carrinho
    cartBtn.addEventListener('click', function() {
      cartModal.style.display = 'block';
    });
  
    // Fecha o modal do carrinho
    closeCartBtn.addEventListener('click', function() {
      cartModal.style.display = 'none';
    });
  });
  