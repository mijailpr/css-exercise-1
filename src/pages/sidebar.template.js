import productsData from '../data/productsData.js';

export function getSidebarTemplate() {
    const categories = [...new Set(productsData.products.map(p => p.category))];
    const brands = [...new Set(productsData.products.map(p => p.brand))];
    const maxPrice = Math.max(...productsData.products.map(p => p.price));

    return `
    <div class="sidebar-content">
      <h2>Filtros</h2>
      <div class="filter">
        <label for="category">Categoría</label>
        <select id="category">
          <option value="all">Todas las categorías</option>
          ${categories.map(category => `
            <option value="${category}">${category}</option>
          `).join('')}
        </select>
      </div>
      
      <div class="filter">
        <label for="price">Precio máximo: $<span id="priceValue">1000</span></label>
        <input type="range" 
               id="price" 
               min="0" 
               max="${Math.ceil(maxPrice)}" 
               step="10" 
               value="${Math.ceil(maxPrice)}"
               oninput="document.getElementById('priceValue').textContent = this.value">
        <div class="price-labels">
          <span>$0</span>
          <span>$${Math.ceil(maxPrice)}</span>
        </div>
      </div>

      <div class="filter">
        <label for="brand">Marca</label>
        <select id="brand">
          <option value="">Todas las marcas</option>
          ${brands.map(brand => `
            <option value="${brand}">${brand}</option>
          `).join('')}
        </select>
      </div>
    </div>
  `;
}
