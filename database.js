const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myproject';

module.exports = class Database {
    loadData(callback) {
        MongoClient.connect(url, function(err, db) {
            const collection = db.collection('documents');
            collection.find({}).toArray(function(err, docs) {
                callback(docs);
            })
        });
    }
}