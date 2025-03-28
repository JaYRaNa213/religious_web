// Import required modules
import express from 'express';
import { processPayment, getUserPayments } from '../controllers/payment.controller.js';

const router = express.Router();
// Define routes for payment functionality
/**
 * @route POST /api/payments/process
 * @description Process payment
 */
router.post('/process', processPayment);

/**
 * @route GET /api/payments/user/:userId
 * @description Get all payments for a user
 */
router.get('/user/:userId', getUserPayments);

export default router; // Export the router

// import express from 'express';
// import { addProduct } from '../controllers/product.controller.js';
// import { upload } from '../middlewares/multer.middleware.js';

// const router = express.Router();

// /**
//  * @route POST /api/products
//  * @description Add a new product with image upload
//  */
// router.post('/', upload.single('productImage'), addProduct);

// export default router;
