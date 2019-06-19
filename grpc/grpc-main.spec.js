const grpc = require('./main');
const getWatermark = require('./services/watermark/get-watermark');
const port = '50051';

describe('gRPC Watermark Sevice', () => {
  beforeAll(async () => {
    grpc.start(port);
  });

  afterAll(async () => {
    await grpc.stop();
  });
  
  describe('App', () => {
    it('Should return null when there is no parameter', (done) => {
      getWatermark({request: { req: {}}}).then((response) => {
        expect(response.watermark.length).toBeGreaterThan(2);
        done();
      });
    });

    it('Should return empty array when the content is different from book or journal', (done) => {
      getWatermark({request: { req: {content: 'test'}}}).then((response) => {
        expect(response).toStrictEqual([]);
        done();
      });
    });

    it('Should return all books', (done) => {
      getWatermark({request: { req: {content: 'book'}}}).then((response) => {
        response.watermark.forEach(item => {
            expect(item.content).toEqual('book');
            done();
        });
      });
    });


    it('Should return  all journals', (done) => {
      getWatermark({request: { req: {content: 'journal'}}}).then((response) => {
        response.watermark.forEach(item => {
          expect(item.content).toEqual('journal');
          done();
        });
      });
    });


    it('Should return the right book for a given title', (done) => {
      getWatermark({request: { req: {title: 'teste'}}}).then((response) => {
        expect(response.watermark).toStrictEqual([{
        content: 'book',
        title: 'teste',
        author: 'lucas',
        topic: 'cloud native'}]);
        done();
      });
    });

    it('Should return an empty array for a inexistent title', (done) => {
      getWatermark({request: { req: {title: 'java'}}}).then((response) => {
        expect(response).toEqual([]);
        done();
      });
    });
  });
});
