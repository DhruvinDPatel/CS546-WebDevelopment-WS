const MongoClient = require("mongodb").MongoClient;

const settings = {
    mongoConfiguration:{
        serverUrl: "mongodb://localhost:27017/",
        database: "lab4"
    }
};

let fullMongoUrl = settings.mongoConfiguration.serverUrl + settings.mongoConfiguration.database;

let _connection = undefined;

let connectDb = () => {
    if(!_connection){
        _connection = MongoClient.connect(fullMongoUrl).then((db) => {
            return db;
        });
    }
    console.log("Connected..");
    return _connection;
};

module.exports = connectDb;