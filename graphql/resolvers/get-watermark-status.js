const WatermarkClient = require('../services/watermark-client');
const client = WatermarkClient();
function getWatermarkStatus(root, param) {
  try {
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
    
    return e;
  }
}

module.exports = getWatermarkStatus;

