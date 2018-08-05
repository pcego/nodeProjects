const mongoClient = require("mongodb").MongoClient

mongoClient.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true})
    .then(conn => global.conn = conn.db("blog")).catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("post").find({}).toArray(callback);
}

function insert(post, callback){
    global.conn.collection("post").insert(post, callback);
}

module.exports = {findAll, insert}