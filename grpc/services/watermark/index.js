const getWatermark = require('./get-watermark');
const getWatermarkStatus = require('./get-watermark-status');
const createWatermark = require('./create-watermarks');
const protoPath = `${__dirname}/watermark.proto`;

module.exports = {
  protoPath,
  implementation: {
    WatermarkService: {
      getWatermark,
      getWatermarkStatus,
      createWatermark
    }
  }
};