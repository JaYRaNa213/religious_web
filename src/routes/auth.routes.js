// src/routes/auth.routes.js
import express from 'express';
import ApiError from '../utils/ApiError.js';

import { register, login, logout,getProfile} from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';


const router = express.Router();

// Define auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protect, getProfile);

export default router;
