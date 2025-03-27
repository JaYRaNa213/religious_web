// Middleware to validate request body using Joi schema
exports.validateRequest = (schema) => {
  return (req, res, next) => {
    // Validate the request body using the provided schema
    const { error } = schema.validate(req.body);

    // If validation fails, return a 400 error with details
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // If validation passes, move to the next middleware or route
    next();
  };
};
