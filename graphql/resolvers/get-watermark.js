
const WatermarkClient = require('../services/watermark-client');
const client = WatermarkClient();
const logger = require('../../logger');

function getWatermark(root, param) {
  logger.log({
    level: 'info',
    message: `Get watermark request`,
    source: 'GraphQL'
  });

  try {
    return new Promise((resolve, reject) => {
      if (!param.id) {
        return 'Empty id parameter';
      }
      
      client.getWatermark(param, (err, response) => {
        if (err) {
          return err.details;
        }

        resolve(response);
      });
    });
  } catch (e) {
    logger.log({
      level: 'error',
      message: `Get watermark status request: ${e}`,
      source: 'GraphQL'
    });
    
    return e;
  }
}

module.exports = getWatermark;

