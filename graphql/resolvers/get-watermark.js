
const WatermarkClient = require('../services/watermark-client');
const  client = WatermarkClient();
function getWatermark(root, param){
  return new Promise((resolve, reject) => {
    client.getWatermark(param, (err, response) => {
      if (err) {
        return reject(err.details);
      } 

      resolve(response.watermark)
    });
  });
}

module.exports = getWatermark;

