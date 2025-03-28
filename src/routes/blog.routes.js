import express from 'express';
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { checkRole } from '../middlewares/role.middleware.js';

const router = express.Router();

/**
 * @route GET /api/blogs
 * @description Get all blogs (Public route)
 */
router.get('/', getAllBlogs);

/**
 * @route POST /api/blogs
 * @description Add a new blog (Only Admins can add blogs)
 */
router.post('/', verifyToken, checkRole(['admin']), addBlog);

/**
 * @route PUT /api/blogs/:id
 * @description Update a blog (Only Admins can update blogs)
 */
router.put('/:id', verifyToken, checkRole(['admin']), updateBlog);

/**
 * @route DELETE /api/blogs/:id
 * @description Delete a blog (Only Admins can delete blogs)
 */
router.delete('/:id', verifyToken, checkRole(['admin']), deleteBlog);

export default router;
