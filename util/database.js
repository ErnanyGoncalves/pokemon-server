const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://ernany:senha@pokemon-6kngw.mongodb.net/pokemonBD?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const mongodbConnected = () => {
    client.connect()
        .then(result => {
            db = client.db();
            console.log('MongoDB Connected!');
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