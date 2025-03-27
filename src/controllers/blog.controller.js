// Import the Blog model
const Blog = require('../models/blog.model');

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    // Destructure blog details from request body
    const { title, content, author, tags } = req.body;

    // Create a new blog
    const blog = new Blog({
      title,
      content,
      author,
      tags,
    });

    // Save blog to the database
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get all blog posts
exports.getBlogs = async (req, res) => {
  try {
    // Get all blog posts
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};
