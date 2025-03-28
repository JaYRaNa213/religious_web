// product.controller.js
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../services/product.service.js';

/**
 * @description Controller to get all products
 */
export const fetchAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to get product by ID
 */
export const fetchProductById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to add a new product
 */
export const createProduct = async (req, res) => {
  try {
    const newProduct = await addProduct(req.body);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to update product
 */
export const modifyProduct = async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

/**
 * @description Controller to delete product
 */
export const removeProduct = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    res.status(200).json({ success: true, message: result });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

//////kk