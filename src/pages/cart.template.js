export function getCartTemplate(products) {
  return `
    <div class="products-grid">
      ${products.map(product => `
        <div class="product">
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
              <button class="decrease-btn" ${(product.quantity || 1) <= 1 ? 'disabled' : ''}>-</button>
              <span class="quantity">${product.quantity || 1}</span>
              <button class="increase-btn" ${(product.quantity || 1) >= product.stock ? 'disabled' : ''}>+</button>
            </div>
            <button class="remove-button" data-product-id="${product.id}">
              <i class="fas fa-trash"></i> Quitar
            </button>
          </div>
        </div>
      `).join('')}
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
