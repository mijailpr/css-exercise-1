export function getCartTemplate(products) {
  return `
    <div class="products-grid">
      ${products.map(product => `
        <div class="product-card">
          <div class="product-image-container">
            <img 
              src="${product.image}" 
              alt="${product.name}"
              class="product-image"
              onerror="this.onerror=null; this.src='/src/image/product-default.avif';"
            >
            ${product.stock < 10 ?
      `<span class="stock-badge low-stock">¡Solo ${product.stock} disponibles!</span>` :
      ''}
            ${product.price > 500 ?
      `<span class="free-shipping-badge">Envío Gratis</span>` :
      ''}
          </div>
          <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-description">${product.description}</div>
          </div>
          <div class="product-actions">
            <div class="quantity-controls" data-product-id="${product.id}">
              <button class="quantity-btn decrease-btn" ${(product.quantity || 1) <= 1 ? 'disabled' : ''}>-</button>
              <span class="quantity">${product.quantity || 1}</span>
              <button class="quantity-btn increase-btn" ${(product.quantity || 1) >= product.stock ? 'disabled' : ''}>+</button>
            </div>
            <button class="add-to-cart" data-product-id="${product.id}">
              Agregar al carrito
            </button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-summary">
      <div class="summary-items">
        <div class="summary-item">
          <span>Subtotal (${products.reduce((total, product) => total + (product.quantity || 1), 0)} productos):</span>
          <span>$${getTotalAmount(products).toFixed(2)}</span>
        </div>
        <div class="summary-item">
          <span>Envío:</span>
          <span>${getTotalAmount(products) > 500 ? 'Gratis' : '$9.99'}</span>
        </div>
        <div class="summary-item total">
          <span>Total:</span>
          <span>$${calculateTotal(products)}</span>
        </div>
      </div>
      <button class="checkout-button">
        Proceder al pago
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
