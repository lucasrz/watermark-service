const grpc = require('./grpc/main');
const graphql = require('./graphql/main');
const grpcPort = '50051';
const graphqlPort = '3000';

const MyCustomReporter = {
  async onTestStart() {
    await graphql.app.listen(graphqlPort);
    await grpc.start(grpcPort);
  },
  async onTestResult() {
    await graphql.app.stop();
    await grpc.stop();
  }
}

module.exports = MyCustomReporter;