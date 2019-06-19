const getWatermark = require('./get-watermark');
const protoPath = `${__dirname}/watermark.proto`;

module.exports = {
  protoPath,
  implementation: {
    WatermarkService: {
      getWatermark
    }
  }
};