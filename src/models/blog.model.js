// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  // Title of the blog post (required)
  title: {
    type: String,
    required: true,
  },
  // Content or body of the blog post
  content: {
    type: String,
    required: true,
  },
  // Author's name who wrote the blog
  author: {
    type: String,
    required: true,
  },
  // Date when the blog was published
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  // Array of tags related to the blog
  tags: {
    type: [String],
  },
});

// Create and export the Blog model
module.exports = mongoose.model('Blog', blogSchema);
