const statusEnum = require('../enums/status.enum');
const logger = require('../../../logger');

async function getWatermarkStatus(ctx) {
  logger.log({
    level: 'info',
    message: `Get watermark status request`,
    source: 'gRPC'
  });

  return new Promise((resolve, reject) => {
    try {
      const id = ctx.request.req.id;
      if(!id) {
        resolve(ctx.res);
      }
      
      setTimeout(() => {
        let enumValues = Object.values(statusEnum);
        let randomIndex = Math.floor((Math.random() * 3));
        ctx.res = {
          status: enumValues[randomIndex]
        };
        
        resolve(ctx.res);
      }, Math.floor((Math.random() * 30) + 1));
    } catch (e) {
      reject();
      logger.log({
        level: 'error',
        message: `Get watermark request: ${e}`,
        source: 'gRPC'
      });

      return ctx.res;
    }
  });
}

module.exports = getWatermarkStatus;



