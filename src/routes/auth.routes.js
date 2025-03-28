// Import required modules
import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/auth.controller.js';

const router = express.Router();

// Define routes for authentication
/**
 * @route POST /api/auth/register
 * @description Register a new user
 */
router.post('/register', registerUser);

/**
 * @route POST /api/auth/login
 * @description Login user
 */
router.post('/login', loginUser);

/**
 * @route GET /api/auth/logout
 * @description Logout user
 */
router.get('/logout', logoutUser);

export default router; // Export the router
