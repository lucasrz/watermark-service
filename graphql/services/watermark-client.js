const grpc  = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const logger = require('../../logger');

try {
  const packageDefinition = protoLoader.loadSync(__dirname + '/watermark.proto');
  const proto = grpc.loadPackageDefinition(packageDefinition);
  const options = {
    'grpc.ssl_target_name_override': 'localhost'
  };
  module.exports = () => new proto.watermark.WatermarkService('localhost:50051', grpc.credentials.createInsecure(), options)
} catch (e) {
  logger.log({
    level: 'error',
    message: `Creating rpc client: ${e}`,
    source: 'GraphQL'
  });
}

