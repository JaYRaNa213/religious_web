// blog.controller.js
import { getAllBlogs, getBlogById, addBlog, updateBlog, deleteBlog } from '../services/blog.service.js';

// Controller to get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get a single blog by ID
export const getBlog = async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Controller to add a new blog
export const createBlog = async (req, res) => {
  try {
    const blog = await addBlog(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Controller to update a blog
export const modifyBlog = async (req, res) => {
  try {
    const blog = await updateBlog(req.params.id, req.body);
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Controller to delete a blog
export const removeBlog = async (req, res) => {
  try {
    const message = await deleteBlog(req.params.id);
    res.status(200).json({ success: true, message });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
