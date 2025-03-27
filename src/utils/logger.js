// Import required packages
const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
    level: 'info', // Logging level
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        // Console transport
        new winston.transports.Console(),
        // File transport for error logs
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

// Log information
// @param {String} level - Log level
// @param {String} message - Log message
const log = (level, message) => {
    logger.log({ level, message });
};

module.exports = log;
