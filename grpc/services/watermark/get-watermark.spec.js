const grpc = require('../../main');
const getWatermark = require('./get-watermark');
const port = '50051';

describe('gRPC Watermark Service', () => {
  describe('App', () => {
    it('Should return an empty object when there is no parameter', (done) => {
      getWatermark({ request: { req: { id: '' } } }).then((response) => {
        const emptyExpected = {
          _id: null,
          title: null,
          author: null,
          content: null
        };
        expect(response).toEqual(emptyExpected);
        done();
      });
    });

    it('Should return undefined when the id is not found', (done) => {
      getWatermark({ request: { req: { id: 'testdasdsa' } } }).then((response) => {
        expect(response).toEqual(undefined);
        done();
      });
    });

    it('Should return a books for a given id', (done) => {
      getWatermark({ request: { req: { id: '5d14daf4ed584348644c82fa' } } }).then((response) => {
        const expected = {
          _id: '5d14daf4ed584348644c82fa',
          title: 'testing',
          author: 'Lucasss',
          content: 'book',
          topic: 'Testing create watermark'
        };
        expect(response).toEqual(expected);
        done();
      });
    });
  });
});
