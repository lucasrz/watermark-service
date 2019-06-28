const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb+srv://lucasrz:1wJdYR2U81DLzdtb@cluster0-e2t29.mongodb.net/test?retryWrites=true&w=majority";
const Watermark = require('../../models/watermark')

async function createWatermark(ctx) {
  try {
    let watermarksArray = [];
    ctx.res = {
        ticket: []
    };

    ctx.request.req.watermark.forEach(element => {
        watermarksArray.push(new Watermark(element))
    });

    watermarksArray.forEach(element => {
        if (element.validateSync()) {
            throw 'Invalid data';
        }
    });

    const mongoClient = new MongoClient(databaseUrl, { useNewUrlParser: true });
    await mongoClient.connect();
    const collection = await mongoClient.db('Publishing-Watermark').collection('watermark');
    await collection.insertMany(watermarksArray);

    watermarksArray.forEach(element => {
        ctx.res.ticket.push({ _id: element.id.toString() })
    });

    return ctx.res;
  } catch (e) {

    return ctx.res;
  }
}

module.exports = createWatermark;



