const grpc = require('./grpc/main');
const port = '50051';

const MyCustomReporter = {
  async onTestStart() {
    await grpc.start(port);
  },
  async onTestResult() {
    await grpc.stop();
  }
}

module.exports = MyCustomReporter;