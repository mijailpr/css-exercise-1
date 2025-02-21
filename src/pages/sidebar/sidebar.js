import productsData from '../../data/productsData.js';
import { updateProductsDisplay } from '../cart/cart.js';

let selectedFilters = {
    category: 'All',
    priceRange: null,
    brand: null
};

let currentProducts = productsData.products;
let priceRange = {
    min: Math.min(...productsData.products.map(p => p.price)),
    max: Math.max(...productsData.products.map(p => p.price)),
    current: {
        min: Math.min(...productsData.products.map(p => p.price)),
        max: Math.max(...productsData.products.map(p => p.price))
    }
};

export function renderSidebar(container) {
    container.innerHTML = getSidebarTemplate();
    setupEventListeners();
    updateFilters();
}

function getSidebarTemplate() {
    const categories = ['All', ...productsData.categories];
    const availableBrands = getAvailableBrands();

    return `
        <div class="sidebar-section">
            <h3 class="sidebar-title">Categories</h3>
            <ul class="category-list">
                ${categories.map(category => `
                    <li class="filter-item ${selectedFilters.category === category ? 'selected' : ''}" 
                        data-category="${category}">
                        <input type="radio" 
                               name="category" 
                               class="filter-radio" 
                               id="cat-${category}"
                               ${selectedFilters.category === category ? 'checked' : ''}>
                        <label class="filter-label" for="cat-${category}">${category}</label>
                        <span class="filter-count">
                            (${category === 'All' ?
            productsData.products.length :
            productsData.filterByCategory(category).length})
                        </span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="sidebar-section">
            <h3 class="sidebar-title">Price Range</h3>
            <div class="price-range-container">
                <div class="price-range-slider">
                    <div class="range-selected"></div>
                    <input type="range" 
                           class="range-slider" 
                           id="priceRangeMin"
                           min="${priceRange.min}" 
                           max="${priceRange.max}" 
                           value="${priceRange.current.min}">
                    <input type="range" 
                           class="range-slider" 
                           id="priceRangeMax"
                           min="${priceRange.min}" 
                           max="${priceRange.max}" 
                           value="${priceRange.current.max}">
                </div>
                <div class="price-range-values">
                    <span>$${priceRange.current.min.toFixed(2)}</span>
                    <span>$${priceRange.current.max.toFixed(2)}</span>
                </div>
            </div>
        </div>

        <div class="sidebar-section">
            <h3 class="sidebar-title">Brands</h3>
            <ul class="brand-list">
                ${availableBrands.map(brand => `
                    <li class="filter-item" data-brand="${brand}">
                        <input type="checkbox" 
                               class="filter-checkbox" 
                               id="brand-${brand}"
                               ${selectedFilters.brand === brand ? 'checked' : ''}>
                        <label class="filter-label" for="brand-${brand}">${brand}</label>
                        <span class="filter-count">
                            (${currentProducts.filter(p => p.brand === brand).length})
                        </span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function setupEventListeners() {
    // Event listeners para categorías
    document.querySelectorAll('.category-list .filter-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            selectedFilters.category = category;
            selectedFilters.brand = null; // Reset brand filter when category changes
            updatePriceRangeForCategory(category);
            updateFilters();
        });
    });

    // Event listeners para el range slider de precio
    const minSlider = document.getElementById('priceRangeMin');
    const maxSlider = document.getElementById('priceRangeMax');
    const rangeSelected = document.querySelector('.range-selected');

    if (minSlider && maxSlider) {
        function updateRangeSelection() {
            const percent1 = ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            const percent2 = ((maxSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            rangeSelected.style.left = percent1 + '%';
            rangeSelected.style.width = (percent2 - percent1) + '%';
        }

        minSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (value > parseFloat(maxSlider.value)) {
                e.target.value = maxSlider.value;
                return;
            }
            priceRange.current.min = value;
            updateRangeSelection();
            updatePriceRangeDisplay();
            updateFilters();
        });

        maxSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (value < parseFloat(minSlider.value)) {
                e.target.value = minSlider.value;
                return;
            }
            priceRange.current.max = value;
            updateRangeSelection();
            updatePriceRangeDisplay();
            updateFilters();
        });

        updateRangeSelection();
    }

    // Event listeners para marcas
    document.querySelectorAll('.brand-list .filter-item').forEach(item => {
        item.addEventListener('click', () => {
            const brand = item.dataset.brand;
            selectedFilters.brand = selectedFilters.brand === brand ? null : brand;
            updateFilters();
        });
    });
}

function updatePriceRangeForCategory(category) {
    const products = category === 'All' ?
        productsData.products :
        productsData.filterByCategory(category);

    priceRange = {
        min: Math.min(...products.map(p => p.price)),
        max: Math.max(...products.map(p => p.price)),
        current: {
            min: Math.min(...products.map(p => p.price)),
            max: Math.max(...products.map(p => p.price))
        }
    };

    const minSlider = document.getElementById('priceRangeMin');
    const maxSlider = document.getElementById('priceRangeMax');
    if (minSlider && maxSlider) {
        minSlider.min = priceRange.min;
        minSlider.max = priceRange.max;
        minSlider.value = priceRange.current.min;
        maxSlider.min = priceRange.min;
        maxSlider.max = priceRange.max;
        maxSlider.value = priceRange.current.max;
    }

    updatePriceRangeDisplay();
}

function updatePriceRangeDisplay() {
    const container = document.querySelector('.price-range-container');
    if (container) {
        const values = container.querySelector('.price-range-values');

        if (values) {
            values.innerHTML = `
                <span>$${priceRange.current.min.toFixed(2)}</span>
                <span>$${priceRange.current.max.toFixed(2)}</span>
            `;
        }
    }
}

function getAvailableBrands() {
    let products = selectedFilters.category === 'All' ?
        productsData.products :
        productsData.filterByCategory(selectedFilters.category);

    products = products.filter(p => p.price >= priceRange.current.min && p.price <= priceRange.current.max);

    return [...new Set(products.map(p => p.brand))].sort();
}

function updateFilters() {
    // Filtrar productos por categoría
    let filteredProducts = selectedFilters.category === 'All' ?
        productsData.products :
        productsData.filterByCategory(selectedFilters.category);

    // Filtrar por rango de precio
    filteredProducts = filteredProducts.filter(p =>
        p.price >= priceRange.current.min && p.price <= priceRange.current.max
    );

    // Filtrar por marca
    if (selectedFilters.brand) {
        filteredProducts = filteredProducts.filter(p => p.brand === selectedFilters.brand);
    }

    currentProducts = filteredProducts;

    // Actualizar la visualización del sidebar
    const container = document.querySelector('.sidebar');
    if (container) {
        container.innerHTML = getSidebarTemplate();
        setupEventListeners();
    }

    // Actualizar la visualización de productos
    updateProductsDisplay(filteredProducts);
}
