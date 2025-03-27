// Import models
const Product = require('../models/product.model');

// Service to get all products
// @returns {Array} - List of all products
const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

// Service to get a product by ID
// @param {String} productId - Product ID
// @returns {Object} - Product details
const getProductById = async (productId) => {
    const product = await Product.findById(productId);
    return product;
};

// Service to add a new product
// @param {Object} productData - Product details
// @returns {Object} - Created product
const addProduct = async (productData) => {
    const newProduct = await Product.create(productData);
    return newProduct;
};

// Service to update a product
// @param {String} productId - Product ID
// @param {Object} productData - Updated product details
// @returns {Object} - Updated product
const updateProduct = async (productId, productData) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });
    return updatedProduct;
};

// Service to delete a product
// @param {String} productId - Product ID
// @returns {String} - Confirmation message
const deleteProduct = async (productId) => {
    await Product.findByIdAndDelete(productId);
    return 'Product deleted successfully!';
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};
