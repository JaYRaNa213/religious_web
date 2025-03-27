// Import models
const Blog = require('../models/blog.model');

// Service to get all blogs
// @returns {Array} - List of all blogs
const getAllBlogs = async () => {
    const blogs = await Blog.find();
    return blogs;
};

// Service to get a blog by ID
// @param {String} blogId - Blog ID
// @returns {Object} - Blog details
const getBlogById = async (blogId) => {
    const blog = await Blog.findById(blogId);
    return blog;
};

// Service to add a new blog
// @param {Object} blogData - Blog details
// @returns {Object} - Created blog
const addBlog = async (blogData) => {
    const newBlog = await Blog.create(blogData);
    return newBlog;
};

// Service to update a blog
// @param {String} blogId - Blog ID
// @param {Object} blogData - Updated blog details
// @returns {Object} - Updated blog
const updateBlog = async (blogId, blogData) => {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, blogData, { new: true });
    return updatedBlog;
};

// Service to delete a blog
// @param {String} blogId - Blog ID
// @returns {String} - Confirmation message
const deleteBlog = async (blogId) => {
    await Blog.findByIdAndDelete(blogId);
    return 'Blog deleted successfully!';
};

module.exports = {
    getAllBlogs,
    getBlogById,
    addBlog,
    updateBlog,
    deleteBlog,
};
