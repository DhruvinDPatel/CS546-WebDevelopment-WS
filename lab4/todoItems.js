const dbConnection = require('./dbConnection')

let getCollection = (collection) => {
    let _collection = undefined;

    return () => {
        if(!_collection){
            _collection = dbConnection().then(db => {
                return db.collection(collection);
            });
        }
        return _collection;
    }
}

module.exports = {
    todoItems: getCollection("todoItems")
}