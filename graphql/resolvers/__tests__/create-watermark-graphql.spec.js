const createWatermarkResolver = require('../create-watermark');

describe('Create Watermark Resolver', () => {
  it('Should return an id for a new watermark', (done) => {
    const watermark = {
      title: 'Testing is cool',
      author: 'Tester',
      content: 'Journal'
    };
    createWatermarkResolver({}, { watermark: [watermark]}).then((response) => {
      expect(response[0]).toHaveProperty('_id');
      expect(response[0]._id.length).toBeGreaterThan(2);
      done();
    });
  });
});