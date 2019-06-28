const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb+srv://lucasrz:1wJdYR2U81DLzdtb@cluster0-e2t29.mongodb.net/test?retryWrites=true&w=majority";
const ObjectId = require('mongodb').ObjectID;

async function getWatermark(ctx) {
  try {
    const id = ctx.request.req.id;
    ctx.res = { 
      _id: null,
      content: null,
      title: null,
      author: null,
    };

    if(!id) {
      return ctx.res;
    }
    
    const mongoClient = new MongoClient(databaseUrl, { useNewUrlParser: true });
    await mongoClient.connect();
    const collection = await mongoClient.db('Publishing-Watermark').collection('watermark');
    const result = await collection.find( { "_id": ObjectId(id)} ).toArray();
    result[0]._id = result[0]._id.toString();
    
    ctx.res = result[0];
    return ctx.res;
  } catch (e) {
  
  }
}
  
module.exports = getWatermark;



 