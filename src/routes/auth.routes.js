// Import required modules
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Define routes for authentication
// @route POST /api/auth/register - Register a new user
router.post('/register', authController.registerUser);

// @route POST /api/auth/login - Login user
router.post('/login', authController.loginUser);

// @route GET /api/auth/logout - Logout user
router.get('/logout', authController.logoutUser);

module.exports = router; // Export the router
