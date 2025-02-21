import productsData from '../../data/productsData.js';

const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;
let cartItems = [];

export function renderCart(container, products = productsData.products) {
  // Crear el contenedor principal
  container.innerHTML = `
        <div class="products-container">
            <div class="products-grid"></div>
            <div class="pagination-container"></div>
        </div>
    `;

  const productsGrid = container.querySelector('.products-grid');
  const paginationContainer = container.querySelector('.pagination-container');

  // Calcular productos para la página actual
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  renderProducts(paginatedProducts, productsGrid);
  renderPagination(paginationContainer, totalPages, products);
}

// Funciones para el carrito
export function addToCart(productId) {
  const product = productsData.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cartItems.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  updateCartCount();
  updateCartDisplay();
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCartCount();
  updateCartDisplay();
}

export function updateItemQuantity(productId, quantity) {
  const item = cartItems.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(0, quantity);
    if (item.quantity === 0) {
      removeFromCart(productId);
    } else {
      updateCartCount();
      updateCartDisplay();
    }
  }
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalAmount = document.getElementById('cart-total-amount');

  if (!cartItemsContainer || !cartTotalAmount) return;

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                <div class="cart-item-total">Total: $${itemTotal.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="window.updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="window.updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button onclick="window.removeFromCart(${item.id})" class="remove-item">×</button>
                </div>
            </div>
        `;
    cartItemsContainer.appendChild(itemElement);
  });

  cartTotalAmount.textContent = `$${total.toFixed(2)}`;
}

export function updateProductsDisplay(filteredProducts) {
  const container = document.getElementById('products-container');
  currentPage = 1; // Reset to first page when filtering
  renderCart(container, filteredProducts);
}

function renderProducts(products, container) {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <div class="quantity-controls">
                    <button onclick="event.stopPropagation(); window.updateProductQuantity(${product.id}, 'decrease')" class="quantity-btn">-</button>
                    <span id="quantity-${product.id}" class="quantity-display">1</span>
                    <button onclick="event.stopPropagation(); window.updateProductQuantity(${product.id}, 'increase')" class="quantity-btn">+</button>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); window.addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    container.appendChild(productCard);
  });
}

function renderPagination(container, totalPages, products) {
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination';

  // Botón Previous con solo ícono
  const prevButton = document.createElement('button');
  prevButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    `;
  prevButton.className = 'pagination-btn';
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderCart(document.getElementById('products-container'), products);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Números de página
  const pageNumbers = document.createElement('div');
  pageNumbers.className = 'page-numbers';

  const pagesToShow = getPagesToShow(currentPage, totalPages);
  pagesToShow.forEach(pageNum => {
    if (pageNum === '...') {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '•';
      ellipsis.className = 'pagination-ellipsis';
      pageNumbers.appendChild(ellipsis);
    } else {
      const pageButton = document.createElement('button');
      pageButton.textContent = pageNum;
      pageButton.className = `pagination-btn ${pageNum === currentPage ? 'active' : ''}`;
      pageButton.onclick = () => {
        if (pageNum !== currentPage) {
          currentPage = pageNum;
          renderCart(document.getElementById('products-container'), products);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      pageNumbers.appendChild(pageButton);
    }
  });

  // Botón Next con solo ícono
  const nextButton = document.createElement('button');
  nextButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    `;
  nextButton.className = 'pagination-btn';
  nextButton.disabled = currentPage === totalPages;
  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCart(document.getElementById('products-container'), products);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageNumbers);
  paginationContainer.appendChild(nextButton);
  container.appendChild(paginationContainer);
}

function getPagesToShow(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  }

  if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  }

  return [1, '...', current - 1, current, current + 1, '...', total];
}

function getCurrentProducts() {
  return document.querySelector('.products-grid') ?
    Array.from(document.querySelectorAll('.product-card')).map(card => {
      return {
        name: card.querySelector('.product-name').textContent,
        // ... otros campos necesarios
      };
    }) :
    productsData.products;
}

// Exponer funciones necesarias globalmente
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateItemQuantity = updateItemQuantity;
window.updateProductQuantity = (productId, action) => {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  if (quantityElement) {
    let quantity = parseInt(quantityElement.textContent);
    if (action === 'increase') {
      quantity++;
    } else if (action === 'decrease' && quantity > 1) {
      quantity--;
    }
    quantityElement.textContent = quantity;
  }
};

window.addToCart = function (productId) {
  console.log('Adding product to cart:', productId);
  alert('Product added to cart!');
};
