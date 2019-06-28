const WatermarkClient = require('../services/watermark-client');
const client = WatermarkClient();
const logger = require('../../logger');

function getWatermarkStatus(root, param) {
  try {
    logger.log({
      level: 'info',
      message: `Get watermark status request`,
      source: 'GraphQL'
    });

    return new Promise((resolve, reject) => {
      if (!param.id) {
        return 'Empty id parameter';
      }

      client.getWatermarkStatus(param, (err, response) => {
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

module.exports = getWatermarkStatus;

