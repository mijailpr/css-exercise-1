// Store orders in localStorage
let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function createOrder(cartItems, total) {
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cartItems,
        total: total,
        status: 'pending'
    };

    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    return order;
}

export function renderOrders(container) {
    container.innerHTML = `
        <div class="orders-container">
            <h2>My Orders</h2>
            <div class="orders-list"></div>
        </div>
    `;

    const ordersList = container.querySelector('.orders-list');

    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders">
                <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" stroke-width="1" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <h3>No Orders Yet</h3>
                <p>You haven't made any purchases yet. Start shopping to see your orders here!</p>
                <button class="start-shopping" onclick="showPage('products')">Start Shopping</button>
            </div>`;
        return;
    }

    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-card';
        orderElement.innerHTML = `
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
                <span class="order-status ${order.status}">${order.status}</span>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}" class="order-item-image">
                        <div class="order-item-details">
                            <span class="item-name">${item.name}</span>
                            <span class="item-quantity">x${item.quantity}</span>
                            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <span class="order-total">Total: $${order.total.toFixed(2)}</span>
            </div>
        `;
        ordersList.appendChild(orderElement);
    });
}