const getWatermarkResolver = require('./get-watermark')
const grpc = require('../../grpc/main');
const port = '50051';

describe('Get Watermark Resolver', () => {
  it('Should return the right data for parameter content=book', async () => {
    const param = {
      content: 'book'
    };
    const expected = [
      {author: 'lucas', content: 'book', title: 'teste', topic: 'cloud native',},
      { author: 'Google', content: 'book', title: 'Cloud Native Basics', topic: 'Cloud Native' }
    ];

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual(expected);
    });
  });

  it('Should return the right data for parameter title=teste', async () => {
    const param = {
      title: 'teste'
    };
    const expected = [{
      author: 'lucas', content: 'book', title: 'teste', topic: 'cloud native'
    }];

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual(expected);
    });
  });

  it('Should return no data for no parameter', async () => {
    const param = {};
    const expected = [
    {author: 'lucas', content: 'book', title: 'teste', topic: 'cloud native'}, 
    {author: 'IBM', content: 'journal', title: 'Cloud Native Journal'}, 
    {author: 'Google', content: 'book', title: 'Cloud Native Basics', topic: 'Cloud Native'}
  ];

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual(expected);
    });
  });

  it('Should return no data for non existing parameter title=java', async () => {
    const param = {
      title: 'java'
    };
    const expected = undefined;

     getWatermarkResolver({}, param).then((response) => {
      expect(response).toEqual(expected);
    });
  });

  afterAll(async () => {
    grpc.stop();
  });
});