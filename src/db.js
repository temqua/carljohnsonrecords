const { MongoClient } = require("mongodb");
async function connect(callback){
    const uri = "mongodb://localhost:27018/cjsite";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();
        const collection = client.db().collection('cjrec');
        await callback(collection);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


module.exports = {
    connect
}