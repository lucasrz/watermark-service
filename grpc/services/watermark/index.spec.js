const index = require('./index');
const createWatermark = require('./create-watermarks');
const getWatermarkStatus = require('./get-watermark-status');
const getWatermark = require('./get-watermark');

describe('gRPC Watermark Service Index', () => {
  describe('App', () => {
    it('Should match the following object', () => {
      const expected = {
        protoPath: '/Users/lucasrz/www/watermark-service/grpc/services/watermark/watermark.proto',
        implementation: {
          WatermarkService: {
            getWatermark: getWatermark,
            getWatermarkStatus: getWatermarkStatus,
            createWatermark: createWatermark
          }
        }
      }
      
      expect(index).toEqual(expected);
    });
  });
});
