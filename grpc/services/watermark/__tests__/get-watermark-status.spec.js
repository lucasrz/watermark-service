const grpc = require('../../../main');
const getWatermarkStatus = require('../get-watermark-status');
const port = '50051';

describe('gRPC Watermark Status Service', () => {
  it('Should return an empty status when there is no parameter', (done) => {
    getWatermarkStatus({ request: { req: { id: '' } } }).then((response) => {
      expect(response).toEqual(undefined);
      done();
    });
  });

  it('Should return a books for a given id', (done) => {
    getWatermarkStatus({ request: { req: { id: '5d14daf4ed584348644c82fa' } } }).then((response) => {
      expect(response).toHaveProperty('status');
      expect(true).toBe(response.status === 'Started' || response.status === 'Pending' || response.status === 'Finished');
      done();
    });
  });
});
