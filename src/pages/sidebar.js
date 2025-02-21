import { getSidebarTemplate } from './sidebar.template.js';
import productsData from '../data/productsData.js';
import { updateProductsDisplay } from '../main.js';

export function renderSidebar(container) {
    if (!container) return;

    // Asegurarnos de que el contenedor esté vacío antes de renderizar
    container.innerHTML = '';

    // Añadir la clase sidebar
    container.classList.add('sidebar');

    // Renderizar el contenido
    container.innerHTML = getSidebarTemplate();

    // Añadir event listeners para los filtros
    const categorySelect = document.getElementById('category');
    const priceRange = document.getElementById('price');
    const brandSelect = document.getElementById('brand');

    if (categorySelect && priceRange && brandSelect) {
        categorySelect.addEventListener('change', filterProducts);
        priceRange.addEventListener('input', filterProducts);
        brandSelect.addEventListener('change', filterProducts);
    }

    // Llamar a filterProducts inicialmente para mostrar todos los productos
    setTimeout(() => {
        filterProducts();
    }, 0);
}

function filterProducts() {
    const categorySelect = document.getElementById('category');
    const priceRange = document.getElementById('price');
    const brandSelect = document.getElementById('brand');

    if (!categorySelect || !priceRange || !brandSelect) {
        console.error('No se encontraron los elementos de filtro');
        return;
    }

    const category = categorySelect.value;
    const price = priceRange.value;
    const brand = brandSelect.value;

    console.log('Filtrando productos:', { category, price, brand });

    // Comenzar con todos los productos
    let filteredProducts = productsData.products;

    // Aplicar filtro de categoría solo si no es 'all'
    if (category && category !== 'all') {
        filteredProducts = productsData.filterByCategory(category);
    }

    // Aplicar filtro de precio
    if (price) {
        filteredProducts = productsData.filterByPriceRange(filteredProducts, { min: 0, max: parseInt(price) });
    }

    // Aplicar filtro de marca solo si se ha seleccionado una
    if (brand) {
        filteredProducts = productsData.filterByBrand(filteredProducts, brand);
    }

    console.log('Productos filtrados:', filteredProducts.length);

    // Actualizar la visualización de productos
    if (typeof window.updateProductsDisplay === 'function') {
        window.updateProductsDisplay(filteredProducts);
    } else {
        console.error('updateProductsDisplay no está disponible');
    }
}
