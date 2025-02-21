import { getCartTemplate } from './cart.template.js';
import productsData from '../data/productsData.js';

// Inicializamos el carrito con todos los productos
let cart = productsData.products;

export function renderCart(container) {
    if (!container) return;
    container.classList.add('cart');
    updateProductsDisplay(cart);

    // Agregar event listeners usando delegación de eventos
    container.addEventListener('click', (e) => {
        const target = e.target;
        const productId = parseInt(target.closest('[data-product-id]')?.dataset.productId);

        if (!productId) return;

        if (target.classList.contains('increase-btn')) {
            increaseQuantity(productId);
        } else if (target.classList.contains('decrease-btn')) {
            decreaseQuantity(productId);
        } else if (target.classList.contains('remove-button')) {
            removeProduct(productId);
        }
    });

    // Event listener para el botón de checkout
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('checkout-button')) {
            checkout();
        }
    });
}

export function updateProductsDisplay(products = cart) {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = getCartTemplate(products);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (!cartCount) return;
    const totalItems = cart.reduce((total, product) => total + (product.quantity || 1), 0);
    cartCount.textContent = totalItems;
}

function increaseQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product && product.quantity < product.stock) {
        product.quantity = (product.quantity || 1) + 1;
        updateProductsDisplay();
    }
}

function decreaseQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        updateProductsDisplay();
    }
}

function removeProduct(productId) {
    cart = cart.filter(p => p.id !== productId);
    updateProductsDisplay();
}

function checkout() {
    alert('¡Gracias por tu compra!');
}

window.updateProductsDisplay = updateProductsDisplay;

export function getCartTemplate(products) {
  const productsHtml = products.map(product => `
    <div class="product" data-id="${product.id}">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}">
        ${product.stock < 10 ? 
          `<span class="stock-badge low-stock">¡Solo ${product.stock} disponibles!</span>` : 
          ''}
        ${product.price > 500 ? 
          `<span class="free-shipping-badge">Envío Gratis</span>` : 
          ''}
      </div>
      <div class="product-details">
        <div class="product-category">${product.category}</div>
        <h3>${product.name}</h3>
        <div class="product-brand">${product.brand}</div>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <div class="product-description">${product.description}</div>
      </div>
      <div class="product-actions">
        <div class="quantity-controls" data-product-id="${product.id}">
          <button class="decrease-btn">-</button>
          <span class="quantity">${product.quantity || 1}</span>
          <button class="increase-btn">+</button>
        </div>
        <button class="remove-button" data-product-id="${product.id}">
          <i class="fas fa-trash"></i> Quitar
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="products-grid">
      ${productsHtml}
    </div>
    <div class="total-container">
      <div class="cart-summary">
        <div class="summary-item">
          <span>Subtotal (${products.reduce((total, product) => total + (product.quantity || 1), 0)} productos):</span>
          <span>$${getTotalAmount(products).toFixed(2)}</span>
        </div>
        <div class="summary-item shipping">
          <span>Envío:</span>
          <span>${getTotalAmount(products) > 500 ? 'Gratis' : '$9.99'}</span>
        </div>
        <div class="summary-item total">
          <span>Total:</span>
          <span>$${calculateTotal(products)}</span>
        </div>
      </div>
      <button class="checkout-button">
        <i class="fas fa-shopping-cart"></i> Proceder al pago
      </button>
    </div>
  `;
}

function getTotalAmount(products) {
  return products.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
}

function calculateTotal(products) {
  const subtotal = getTotalAmount(products);
  const shipping = subtotal > 500 ? 0 : 9.99;
  return (subtotal + shipping).toFixed(2);
}
