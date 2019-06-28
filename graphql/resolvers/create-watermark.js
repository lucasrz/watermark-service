
const WatermarkClient = require('../services/watermark-client');
const client = WatermarkClient();
const logger = require('../../logger');

function createWatermark(root, param) {
  logger.log({
    level: 'info',
    message: `Create watermark request`,
    source: 'GraphQL'
  });

  try {
    return new Promise((resolve, reject) => {
      client.createWatermark(param, (err, response) => {
        if (err || response === undefined || !response.ticket) {
          return 'Couldnt create watermarks';
        }

        resolve(response.ticket);
      });
    });
  } catch (e) {
    logger.log({
      level: 'error',
      message: `Create watermark request: ${e}`,
      source: 'GraphQL'
    });
    
    return e;
  }
}

module.exports = createWatermark;

