import './style.css';
import './pages/sidebar/sidebar.css';
import './pages/cart/cart.css';
import './pages/orders/orders.css';
import { renderSidebar } from './pages/sidebar/sidebar.js';
import { renderCart, updateProductsDisplay } from './pages/cart/cart.js';
import { renderOrders, createOrder } from './pages/orders/orders.js';
import productsData from './data/productsData.js';

function initializeApp() {
  console.log('Inicializando aplicación...');

  const sidebarContainer = document.getElementById('sidebar');
  const productsContainer = document.getElementById('products-container');

  if (!sidebarContainer || !productsContainer) {
    console.error('No se encontraron los contenedores necesarios');
    return;
  }

  // Renderizar el sidebar primero
  renderSidebar(sidebarContainer);

  // Setup navigation
  setupNavigation();

  // Por defecto, mostrar la página de productos
  showPage('products');

  // Configurar la búsqueda
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredProducts = productsData.searchProducts(productsData.products, searchTerm);
      updateProductsDisplay(filteredProducts);
    });
  }
}

function setupNavigation() {
  window.showPage = function (page) {
    const productsContainer = document.getElementById('products-container');
    const cartPage = document.getElementById('cart-page');
    const body = document.body;

    // Reset body scroll
    body.style.overflow = '';

    // Hide all pages first
    productsContainer.style.display = 'none';
    cartPage.classList.add('hidden');

    // Close any open modal
    const modal = document.querySelector('.thank-you-modal');
    if (modal) {
      modal.classList.remove('visible');
    }

    switch (page) {
      case 'products':
        productsContainer.style.display = 'grid';
        renderCart(productsContainer);
        break;
      case 'cart':
        cartPage.classList.remove('hidden');
        // Ensure cart display is updated
        window.cartItems && updateCartDisplay();
        break;
      case 'orders':
        productsContainer.style.display = 'block';
        renderOrders(productsContainer);
        break;
    }
  }
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Expose necessary functions globally
window.updateProductsDisplay = updateProductsDisplay;
window.checkout = function () {
  const cartItems = document.getElementById('cart-items');
  const totalAmount = document.getElementById('cart-total-amount');

  if (cartItems && totalAmount) {
    const total = parseFloat(totalAmount.textContent.replace('$', ''));

    if (window.cartItems && window.cartItems.length > 0) {
      createOrder(window.cartItems, total);
      alert('Order placed successfully!');

      // Clear cart
      window.cartItems = [];
      cartItems.innerHTML = '';
      totalAmount.textContent = '$0.00';

      // Update cart count
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = '0';
        cartCount.style.display = 'none';
      }

      showPage('orders');
    } else {
      alert('Your cart is empty!');
    }
  }
};

window.toggleCart = function () {
  const cartPage = document.getElementById('cart-page');
  const productsContainer = document.getElementById('products-container');
  const body = document.body;

  if (cartPage.classList.contains('hidden')) {
    cartPage.classList.remove('hidden');
    productsContainer.style.display = 'none';
    body.style.overflow = 'hidden'; // Prevent body scroll when cart is open
    // Ensure cart display is updated when opening
    window.cartItems && updateCartDisplay();
  } else {
    cartPage.classList.add('hidden');
    productsContainer.style.display = 'grid';
    body.style.overflow = ''; // Restore body scroll
  }
};
