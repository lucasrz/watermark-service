
const WatermarkClient = require('../services/watermark-client');
const  client = WatermarkClient();
function listWatermark(root, param){
  return new Promise((resolve, reject) => {
    client.listWatermark(param, (err, response) => {
      if (err) {
        return reject(err.details);
      }
      resolve(response);
    });
  });
}

module.exports = listWatermark;

