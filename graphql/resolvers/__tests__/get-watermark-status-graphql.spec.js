const getWatermarkStatusResolver = require('../get-watermark-status');
const grpc = require('../../../grpc/main');
const port = '50051';

describe('Get Watermark Status Resolver', () => {
  it('Should return a books for a given id', (done) => {
    getWatermarkStatusResolver({}, { id: '5d14daf4ed584348644c82fa' }).then((response) => {
      expect(true).toBe(response.status === 'Started' || response.status === 'Pending' || response.status === 'Finished');
      done();
    });
  });
});