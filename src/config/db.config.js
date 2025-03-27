// Load environment variables
require('dotenv').config();

// Database configuration settings
module.exports = {
  // Database connection URL
  url: process.env.DB_URL || 'mongodb://localhost:27017/religious_website',

  // Database options for better performance and stability
  options: {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true, // Use unified topology engine
    useCreateIndex: true, // Automatically create indexes
    useFindAndModify: false, // Disable deprecated functions
  },
};
