// Import the Product model
const Product = require('../models/product.model');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    // Destructure product details from request body
    const { name, description, price, category, stock, imageUrl } = req.body;

    // Create a new product
    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    // Save product to the database
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    // Get all products from the database
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};
