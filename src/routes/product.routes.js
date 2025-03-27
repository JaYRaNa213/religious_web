// Import required modules
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Define routes for product management
// @route GET /api/products - Get all products
router.get('/', productController.getAllProducts);

// @route GET /api/products/:id - Get product by ID
router.get('/:id', productController.getProductById);

// @route POST /api/products - Add a new product
router.post('/', productController.addProduct);

// @route PUT /api/products/:id - Update product
router.put('/:id', productController.updateProduct);

// @route DELETE /api/products/:id - Delete product
router.delete('/:id', productController.deleteProduct);

module.exports = router; // Export the router
