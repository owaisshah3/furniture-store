const PRODUCTS = [
    {
        id: 100,
        name: 'king size bed',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'The minimalist style and linear profiles of midcentury design inspired our Kosa coffee table. An antiqued-brass inlay accents the top while the base complements the uniform lines. Masterfully crafted, the coffee table has a smooth finish that accentuates the wood’s natural grain and tonal depth.'
    },
    {
        id: 101,
        name: 'table',
        price: 600,
        image: require('../assets/products/car-101.jpg'),
        description: 'The minimalist style and linear profiles of midcentury design inspired our Kosa coffee table. An antiqued-brass inlay accents the top while the base complements the uniform lines. Masterfully crafted, the coffee table has a smooth finish that accentuates the wood’s natural grain and tonal depth.'
    },
    {
        id: 102,
        name: 'chair',
        price: 2,
        image: require('../assets/products/cake-102.jpg'),
        description: 'The minimalist style and linear profiles of midcentury design inspired our Kosa coffee table. An antiqued-brass inlay accents the top while the base complements the uniform lines. Masterfully crafted, the coffee table has a smooth finish that accentuates the wood’s natural grain and tonal depth.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

