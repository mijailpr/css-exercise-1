const productsData = {
    categories: [
        "Electronics",
        "Accessories",
        "Home & Office",
        "Audio",
        "Gaming",
        "Cameras",
        "Smart Home"
    ],
    products: [
        {
            id: 1,
            name: "Wireless Earbuds Pro",
            price: 199.99,
            brand: "Apple",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=200",
            description: "High-quality wireless earbuds with noise cancellation",
            stock: 10
        },
        {
            id: 2,
            name: "Smart Watch Series 5",
            price: 299.99,
            brand: "Samsung",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=200",
            description: "Advanced smartwatch with health tracking",
            stock: 15
        },
        {
            id: 3,
            name: "Portable Bluetooth Speaker",
            price: 79.99,
            brand: "JBL",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=200",
            description: "Waterproof portable speaker with amazing sound",
            stock: 20
        },
        {
            id: 4,
            name: "Laptop Backpack Pro",
            price: 49.99,
            brand: "Dell",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200",
            description: "Premium laptop backpack with USB port",
            stock: 25
        },
        {
            id: 5,
            name: "4K Webcam",
            price: 129.99,
            brand: "Logitech",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1622959588039-e0ab289ac84c?auto=format&fit=crop&q=80&w=200",
            description: "Professional 4K webcam for streaming",
            stock: 8
        },
        {
            id: 6,
            name: "Gaming Mouse",
            price: 89.99,
            brand: "Logitech",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=200",
            description: "High-precision gaming mouse",
            stock: 12
        },
        {
            id: 7,
            name: "Wireless Keyboard",
            price: 159.99,
            brand: "ASUS",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=200",
            description: "Mechanical wireless keyboard",
            stock: 10
        },
        {
            id: 8,
            name: "Smart LED Bulb",
            price: 29.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1550539791-790b6e42d12e?auto=format&fit=crop&q=80&w=200",
            description: "Color changing smart LED bulb",
            stock: 30
        },
        {
            id: 9,
            name: "4K Monitor",
            price: 399.99,
            brand: "Dell",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
            description: "32-inch 4K Ultra HD Monitor",
            stock: 5
        },
        {
            id: 10,
            name: "Gaming Headset",
            price: 129.99,
            brand: "Sony",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=200",
            description: "Wireless Gaming Headset with Surround Sound",
            stock: 15
        },
        {
            id: 11,
            name: "Wireless Mouse",
            price: 49.99,
            brand: "Logitech",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=200",
            description: "Ergonomic Wireless Mouse",
            stock: 25
        },
        {
            id: 12,
            name: "Smart Security Camera",
            price: 89.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Security Camera with Night Vision",
            stock: 18
        },
        {
            id: 13,
            name: "Bluetooth Speaker",
            price: 299.99,
            brand: "Bose",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=200",
            description: "Premium Bluetooth Speaker",
            stock: 10
        },
        {
            id: 14,
            name: "Gaming Laptop",
            price: 1299.99,
            brand: "ASUS",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=200",
            description: "15.6\" Gaming Laptop with RTX Graphics",
            stock: 7
        },
        {
            id: 15,
            name: "Smart Doorbell",
            price: 149.99,
            brand: "Samsung",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=200",
            description: "Video Doorbell with Two-Way Audio",
            stock: 20
        },
        {
            id: 16,
            name: "Wireless Charger",
            price: 39.99,
            brand: "Samsung",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=200",
            description: "Fast Wireless Charging Pad",
            stock: 30
        },
        {
            id: 17,
            name: "Tablet Stand",
            price: 29.99,
            brand: "Logitech",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
            description: "Adjustable Tablet/iPad Stand",
            stock: 40
        },
        {
            id: 18,
            name: "DSLR Camera",
            price: 899.99,
            brand: "Canon",
            category: "Cameras",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200",
            description: "Professional DSLR Camera",
            stock: 8
        },
        {
            id: 19,
            name: "Smart TV",
            price: 699.99,
            brand: "Samsung",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&q=80&w=200",
            description: "55\" 4K Smart TV",
            stock: 12
        },
        {
            id: 20,
            name: "Desk Lamp",
            price: 49.99,
            brand: "Xiaomi",
            category: "Home & Office",
            image: "https://images.unsplash.com/photo-1534883085706-901f0ad05b74?auto=format&fit=crop&q=80&w=200",
            description: "LED Desk Lamp with Wireless Charging",
            stock: 25
        },
        {
            id: 21,
            name: "Camera Lens",
            price: 499.99,
            brand: "Canon",
            category: "Cameras",
            image: "https://images.unsplash.com/photo-1515724687910-96c82b5b9c1b?auto=format&fit=crop&q=80&w=200",
            description: "50mm Professional Camera Lens",
            stock: 10
        },
        {
            id: 22,
            name: "Smart Scale",
            price: 59.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1576515652031-fc429bab6503?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Smart Scale with Body Composition",
            stock: 20
        },
        {
            id: 23,
            name: "USB-C Hub",
            price: 79.99,
            brand: "Dell",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1623949556303-b0d17d198863?auto=format&fit=crop&q=80&w=200",
            description: "7-in-1 USB-C Hub Adapter",
            stock: 30
        },
        {
            id: 24,
            name: "Gaming Chair",
            price: 249.99,
            brand: "ASUS",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=200",
            description: "Ergonomic Gaming Chair",
            stock: 8
        },
        {
            id: 25,
            name: "Monitor Stand",
            price: 69.99,
            brand: "Dell",
            category: "Home & Office",
            image: "https://images.unsplash.com/photo-1619725002198-0fd6d22fe72f?auto=format&fit=crop&q=80&w=200",
            description: "Adjustable Monitor Stand with Storage",
            stock: 15
        },
        {
            id: 26,
            name: "iPad Pro",
            price: 799.99,
            brand: "Apple",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=200",
            description: "11-inch iPad Pro with M1 chip",
            stock: 10
        },
        {
            id: 27,
            name: "Home Theater System",
            price: 599.99,
            brand: "Sony",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=200",
            description: "5.1 Channel Home Theater System",
            stock: 7
        },
        {
            id: 28,
            name: "Soundbar",
            price: 199.99,
            brand: "JBL",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=200",
            description: "2.1 Channel Soundbar with Wireless Subwoofer",
            stock: 12
        },
        {
            id: 29,
            name: "Smart Power Strip",
            price: 39.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1586915714966-13021b73b379?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Smart Power Strip with Voice Control",
            stock: 25
        },
        {
            id: 30,
            name: "Gaming Console",
            price: 499.99,
            brand: "Sony",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=200",
            description: "Next-Gen Gaming Console",
            stock: 5
        },
        {
            id: 31,
            name: "Mechanical Keyboard",
            price: 149.99,
            brand: "Logitech",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=200",
            description: "RGB Mechanical Gaming Keyboard",
            stock: 15
        },
        {
            id: 32,
            name: "Action Camera",
            price: 349.99,
            brand: "Sony",
            category: "Cameras",
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
            description: "4K Action Camera with Stabilization",
            stock: 20
        },
        {
            id: 33,
            name: "Smart Coffee Maker",
            price: 179.99,
            brand: "Samsung",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Connected Coffee Maker",
            stock: 12
        },
        {
            id: 34,
            name: "Laptop Stand",
            price: 45.99,
            brand: "Dell",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?auto=format&fit=crop&q=80&w=200",
            description: "Adjustable Aluminum Laptop Stand",
            stock: 30
        },
        {
            id: 35,
            name: "Noise Cancelling Headphones",
            price: 279.99,
            brand: "Bose",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200",
            description: "Premium Noise Cancelling Headphones",
            stock: 10
        },
        {
            id: 36,
            name: "Smart Thermostat",
            price: 199.99,
            brand: "Samsung",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1633154785503-33e375cffc06?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Smart Thermostat with Voice Control",
            stock: 15
        },
        {
            id: 37,
            name: "Curved Gaming Monitor",
            price: 449.99,
            brand: "ASUS",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1616711903033-c945da16e2fb?auto=format&fit=crop&q=80&w=200",
            description: "34-inch Curved Gaming Monitor",
            stock: 8
        },
        {
            id: 38,
            name: "Phone Gimbal",
            price: 89.99,
            brand: "Sony",
            category: "Cameras",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40712ee0?auto=format&fit=crop&q=80&w=200",
            description: "3-Axis Smartphone Gimbal Stabilizer",
            stock: 20
        },
        {
            id: 39,
            name: "Standing Desk",
            price: 399.99,
            brand: "Dell",
            category: "Home & Office",
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=200",
            description: "Electric Height Adjustable Standing Desk",
            stock: 7
        },
        {
            id: 40,
            name: "Smart Door Lock",
            price: 159.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1624923686627-514dd5e57bae?auto=format&fit=crop&q=80&w=200",
            description: "Fingerprint Smart Door Lock",
            stock: 15
        },
        {
            id: 41,
            name: "Wireless Presenter",
            price: 29.99,
            brand: "Logitech",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
            description: "Wireless Presentation Remote",
            stock: 40
        },
        {
            id: 42,
            name: "Smart Watch Pro",
            price: 449.99,
            brand: "Apple",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=200",
            description: "Advanced Smartwatch with Health Features",
            stock: 12
        },
        {
            id: 43,
            name: "Portable SSD",
            price: 129.99,
            brand: "Samsung",
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1617694820985-a9b55a706e14?auto=format&fit=crop&q=80&w=200",
            description: "1TB Portable Solid State Drive",
            stock: 25
        },
        {
            id: 44,
            name: "Studio Microphone",
            price: 149.99,
            brand: "JBL",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=200",
            description: "USB Condenser Microphone",
            stock: 18
        },
        {
            id: 45,
            name: "Smart Plant Sensor",
            price: 49.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1597308011529-f887bf45c89f?auto=format&fit=crop&q=80&w=200",
            description: "Wi-Fi Plant Monitor and Sensor",
            stock: 30
        },
        {
            id: 46,
            name: "Gaming Mouse Pad",
            price: 24.99,
            brand: "ASUS",
            category: "Gaming",
            image: "https://images.unsplash.com/photo-1616788573672-afef64c1a4ac?auto=format&fit=crop&q=80&w=200",
            description: "RGB Extended Gaming Mouse Pad",
            stock: 50
        },
        {
            id: 47,
            name: "Camera Backpack",
            price: 89.99,
            brand: "Canon",
            category: "Cameras",
            image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=200",
            description: "Professional Camera Backpack",
            stock: 15
        },
        {
            id: 48,
            name: "Cable Management Box",
            price: 19.99,
            brand: "Dell",
            category: "Home & Office",
            image: "https://images.unsplash.com/photo-1616353071855-ee414e2f27c7?auto=format&fit=crop&q=80&w=200",
            description: "Cable Management Solution Box",
            stock: 40
        },
        {
            id: 49,
            name: "Smart Air Purifier",
            price: 199.99,
            brand: "Xiaomi",
            category: "Smart Home",
            image: "https://images.unsplash.com/photo-1626436629862-28a65437e355?auto=format&fit=crop&q=80&w=200",
            description: "Smart Air Purifier with PM2.5 Monitor",
            stock: 10
        },
        {
            id: 50,
            name: "Desk Organizer",
            price: 34.99,
            brand: "Dell",
            category: "Home & Office",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=200",
            description: "Multi-functional Desk Organizer with USB Hub",
            stock: 35
        }
    ],
    priceRanges: [
        {
            id: "range1",
            name: "Under $50",
            min: 0,
            max: 50
        },
        {
            id: "range2",
            name: "$50 - $100",
            min: 50,
            max: 100
        },
        {
            id: "range3",
            name: "$100 - $200",
            min: 100,
            max: 200
        },
        {
            id: "range4",
            name: "$200 - $500",
            min: 200,
            max: 500
        },
        {
            id: "range5",
            name: "Over $500",
            min: 500,
            max: null
        }
    ],

    // Obtener marcas únicas basadas en los productos filtrados
    getBrandsFromFilteredProducts(filteredProducts) {
        return [...new Set(filteredProducts.map(product => product.brand))].sort();
    },

    // Obtener rangos de precios dinámicos basados en los productos filtrados
    getPriceRangesFromFilteredProducts(filteredProducts) {
        if (filteredProducts.length === 0) return [];

        const prices = filteredProducts.map(p => p.price);
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));

        return [
            { id: 'range1', name: `Under $${minPrice + 100}`, min: 0, max: minPrice + 100 },
            { id: 'range2', name: `$${minPrice + 100} - $${maxPrice}`, min: minPrice + 100, max: maxPrice }
        ];
    },

    // Filtrar productos por categoría
    filterByCategory(category) {
        if (!category) return this.products;
        return this.products.filter(product => product.category === category);
    },

    // Filtrar productos por marca
    filterByBrand(products, brand) {
        if (!brand) return products;
        return products.filter(product => product.brand === brand);
    },

    // Filtrar productos por rango de precio
    filterByPriceRange(products, range) {
        if (!range) return products;
        return products.filter(product =>
            product.price >= range.min &&
            (range.max === null || product.price <= range.max)
        );
    },

    // Buscar productos por término
    searchProducts(products, searchTerm) {
        if (!searchTerm) return products;
        const term = searchTerm.toLowerCase();
        return products.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            product.brand.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );
    }
};

export default productsData;