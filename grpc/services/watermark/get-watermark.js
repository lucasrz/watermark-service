const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb+srv://lucasrz:1wJdYR2U81DLzdtb@cluster0-e2t29.mongodb.net/test?retryWrites=true&w=majority";

async function getWatermark(ctx) {
    const content = ctx.request.req.content;
    const title = ctx.request.req.title;
    
    const mongoClient = new MongoClient(databaseUrl, { useNewUrlParser: true });
    await mongoClient.connect();
    const collection = await mongoClient.db('Publishing-Watermark').collection('watermark');
    
    let query;
    (title || content) ?  query = { $or: [{content: content}, {title: title}] }: query = {};
    const results = await collection.find(query).toArray();
    ctx.res = {
      watermark: []
    };

    if(!results.length || !results) {
      return [];
    }
    
    results.forEach(result => {
      delete result['_id'];
      ctx.res.watermark.push(result);
    });

    return ctx.res;
}

module.exports = getWatermark;



