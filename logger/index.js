
const { createLogger, format, transports } = require('winston');
const path = require('path');
const logDir = 'logs'
const logger = createLogger({
  level: '',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.json()
  ),
  source: '' ,
  transports: [
    new transports.File({ filename: path.join(logDir, 'test.log'), level: 'test' }),
    new transports.File({ filename: path.join(logDir, 'info.log'), level: 'info' }),
    new transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }),
  ]
});

logger.add(new transports.Console({
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf((info) => {
      const {
        timestamp, level, message, source
      } = info;

      return `${timestamp} [${level}] ${source}: ${message}`;
    }),
  )
}));

module.exports = logger;