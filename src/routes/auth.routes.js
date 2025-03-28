// src/routes/auth.routes.js
import express from 'express';
import { register, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

// Define auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
