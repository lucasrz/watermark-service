const statusEnum = require('../enums/status.enum');

async function getWatermarkStatus(ctx) {
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
    }
  });
}

module.exports = getWatermarkStatus;



