const mongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId

mongoClient.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true})
    .then(conn => global.conn = conn.db("blog")).catch(err => console.log(err))

function findAll(callback){
    global.conn.collection("post").find({}).toArray(callback);
}

function insert(post, callback){
    global.conn.collection("post").insert(post, callback);
}

function findOne(id, callback){
    global.conn.collection('post').findOne(ObjectId(id), callback);
}

module.exports = {findAll, insert, findOne}