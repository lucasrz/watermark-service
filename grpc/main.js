const Mali = require('mali');
const watermarkService = require('./services/watermark/');
const protoPath = require('./services/watermark/');

async function start(port) {
const server = new Mali(protoPath, 'WatermarkService' );
  server.on('error', (err, ctx) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err);
  })

  server.addService(watermarkService.protoPath, 'WatermarkService');
  server.use(watermarkService.implementation);
  
  await server.start(`localhost:${port}`);
  console.log(`Running on localhost:${port}`);
}

async function stop() {
  await server.stop();
}

module.exports = {
  start: start,
  stop: stop
}