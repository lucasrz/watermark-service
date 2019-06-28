
const WatermarkClient = require('../services/watermark-client');
const client = WatermarkClient();
function createWatermark(root, param) {
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

  }
}

module.exports = createWatermark;

