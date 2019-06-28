const getWatermarkResolver = require('../get-watermark')
const grpc = require('../../../grpc/main');
const port = '50051';

describe('Get Watermark Resolver', () => {
  it('Should return the right data for an existing id', (done) => {
    const param = {
      id: '5d14daf4ed584348644c82fa'
    };
    const expected = 
      {_id: '5d14daf4ed584348644c82fa', author: 'Lucasss', content: 'book', title: 'testing', topic: 'Testing create watermark'};

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual(expected);
      done();
    });
  });

  it('Should return no data for non existing id', (done) => {
    const param = {
      id: 'testdasdsa'
    };
    const expected = {};

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual({});
      done();
    });
  });

  it('Should return no data for an empty id', () => {
    const param = {
      id: ''
    };
    const expected =  {};
     getWatermarkResolver({}, param).then((response) => {
      expect(response).toBe(expected);
    });
  });

});