// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  // User's full name (required)
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // User's email address (required and unique)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  // User's password (required and should be encrypted)
  password: {
    type: String,
    required: true,
  },
  // User's role (can be 'user' or 'admin')
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  // Date when the account was created (default to current date)
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
