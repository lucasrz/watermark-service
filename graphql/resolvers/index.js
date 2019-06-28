const getWatermark = require('./get-watermark');
const getWatermarkStatus = require('./get-watermark-status');
const createWatermark = require('./create-watermark');

const resolvers = { 
  Query: {
    getWatermark,
    getWatermarkStatus
  },
  Mutation: {
    createWatermark,
  }
};

module.exports = resolvers;
