// Import the User model for authentication operations
const User = require('../models/user.model');

// Import bcrypt for password encryption and jwt for token generation
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User registration function
exports.register = async (req, res) => {
  try {
    // Destructure name, email, and password from request body
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save to the database
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// User login function
exports.login = async (req, res) => {
  try {
    // Destructure email and password from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
