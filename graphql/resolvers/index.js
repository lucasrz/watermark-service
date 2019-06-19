const getWatermark = require('./get-watermark');

const resolvers = { 
  Query: {
    getWatermark
  }
};

module.exports = resolvers;
