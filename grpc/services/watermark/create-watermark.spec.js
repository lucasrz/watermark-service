const grpc = require('../../main');
const createWatermark = require('./create-watermarks');
const port = '50051';

describe('gRPC Create Watermark Service', () => {
  it('Should return an id for a new watermark', (done) => {
    const watermark = {
      title: 'Testing is cool',
      author: 'Tester',
      content: 'Journal'
    };
    createWatermark({ request: { req: { watermark: [watermark] } } }).then((response) => {
      expect(response.ticket[0]).toHaveProperty('_id');
      expect(response.ticket[0]._id.length).toBeGreaterThan(2);
      done();
    });
  });

  it('Should return undefined when the watermark object is not correct', (done) => {
    const watermark = {
      title: 'Testing is very cool',
      content: 'Journal'
    };
    createWatermark({ request: { req: { watermark: [watermark] } } }).then((response) => {
      expect(response).toEqual({ ticket: [] });
      done();
    });
  });
});
