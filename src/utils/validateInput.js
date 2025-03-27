// Validate user input
// @param {Object} schema - Joi schema for validation
// @returns {Function} - Middleware for validating request body
const validateInput = (schema) => {
  return (req, res, next) => {
      // Validate request body against the schema
      const { error } = schema.validate(req.body);
      if (error) {
          res.status(400);
          throw new Error(error.details[0].message);
      }
      next();
  };
};

module.exports = validateInput;
