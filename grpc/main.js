const Mali = require('mali');
const watermarkService = require('./services/watermark/');
const protoPath = require('./services/watermark/');
const logger = require('../logger')
let start;
let stop
try {
  start = async function (port) {
  const server = new Mali(protoPath, 'WatermarkService' );
    server.on('error', (err, ctx) => {
      logger.log({
        level: 'error',
        message: `Server error for call  of type %s`,
        source: 'gRPC'
      });
      console.error('server error for call %s of type %s', ctx.name, ctx.type, err);
    })

    server.addService(watermarkService.protoPath, 'WatermarkService');
    server.use(watermarkService.implementation);
    
    await server.start(`localhost:${port}`);
    logger.log({
      level: 'info',
      message: `Server Started at http://localhost:${port}`,
      source: 'gRPC'
    });
  } 

  stop = async function() {
    await server.stop();
  }
} catch (e) {
  logger.log({
    level: 'error',
    message: `Creating gRPC server: ${e}`,
    source: 'gRPC'
  });
}

module.exports = {
  start: start,
  stop: stop
}