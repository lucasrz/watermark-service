const status = require('./status.enum');

describe('gRPC Status Enum', () => {
  it('Started', () => {
    expect(status[status.Started]).toEqual(status.Started);
  });

  it('Pending', () => {
    expect(status[status.Pending]).toEqual(status.Pending);
  });

  it('Finished', () => {
    expect(status[status.Finished]).toEqual(status.Finished);
  });
});
