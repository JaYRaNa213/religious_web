// Import required modules
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

// Define routes for blog management
// @route GET /api/blogs - Get all blogs
router.get('/', blogController.getAllBlogs);

// @route GET /api/blogs/:id - Get blog by ID
router.get('/:id', blogController.getBlogById);

// @route POST /api/blogs - Add a new blog
router.post('/', blogController.addBlog);

// @route PUT /api/blogs/:id - Update a blog
router.put('/:id', blogController.updateBlog);

// @route DELETE /api/blogs/:id - Delete a blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router; // Export the router
