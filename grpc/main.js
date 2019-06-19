const Mali = require('mali');
const WatermarkService = require('./services/watermark/');
const protoPath = require('./services/watermark/');

async function start(port) {
const server = new Mali(protoPath, 'WatermarkService' );
  server.on('error', (err, ctx) => {
    console.error('server error for call %s of type %s', ctx.name, ctx.type, err);
  })

  server.addService(WatermarkService.protoPath, 'WatermarkService');
  server.use(WatermarkService.implementation);

  await server.start(`localhost:${port}`);
  console.log(`Running on localhost:${port}`);
}

module.exports = {
  start: start
}