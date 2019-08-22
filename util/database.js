const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://ernany:senha@pokemon-6kngw.mongodb.net/pokemonBD?retryWrites=true&w=majority";

let db;

const mongodbConnected = callback => {

    MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('MongoDB Connected!');
        db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDB = () => {
    if (db) {
        return db;
    }
    throw 'No database found';
}

exports.mongodbConnected = mongodbConnected;
exports.getDB = getDB;