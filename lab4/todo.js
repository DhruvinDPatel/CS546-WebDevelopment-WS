const uuid = require('node-uuid');
const todoCollectoions = require('./todoItems');
const todo = todoCollectoions.todoItems;

let methodsToExport = {

    createTask(title, description){

        if(!title){
            return Promise.reject("You must provide Title of the task")
        }

        if(!description){
            return Promise.reject("You must provide description of the task")
        }

        let uniqueID = uuid.v1();
        let bytes = uuid.parse(uniqueID);
        let str = uuid.unparse(bytes);

        return todo().then((todoItemsCollection) => {

            let newTask = {
                _id: str,
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };

            return todoItemsCollection
                .insertOne(newTask)
                .then((insertedInfo) => {
                    return insertedInfo.insertedId;
                })
                .then((newId) =>{
                    return this.getTask(newId);
                });
        }).catch((err) => {
            console.error(err);
        })
    },

    getTask(id){
        if(!id){
            return Promise.reject("You must provide a ID to be searched");
        }

        let bytes = uuid.parse(id);
        let str = uuid.unparse(bytes);

        return todo().then((todoItemsCollection) =>{
            return todoItemsCollection.findOne({_id : str});
        }).catch((err) =>{
            console.error(err);
        });
    },

    removeTask(id){
        if(!id){
            return Promise.reject("You must provide id to be Rejected");
        }

        let bytes = uuid.parse(id);
        let str = uuid.unparse(bytes);

        return todo().then((todoItemsCollection) =>{
            return todoItemsCollection
                    .removeOne({_id:str})
                    .then((deletedInfo) =>{
                        if(deletedInfo.deletedCount == 0){
                            throw(`Could not delete the task with id of ${str}`);
                        }
                        else{
                            throw(`${str} deleted`);
                        }
                    });
        }).catch((err) => {
            console.error(err);
        });
    },

    completeTask(taskId){
        if(!taskId){
            return Promise.reject("You must provide task id");
        }

        let bytes = uuid.parse(taskId);
        let str = uuid.unparse(bytes);

        return todo().then((todoItemsCollection) =>{
            let finishedTask = {
                $set : {
                    title: "Play Pokemon with Twitch TV",
                    description: "Should we revive Helix?",
                    completed: true,
                    completedAt: new Date()
                }
            };

            return todoItemsCollection.updateOne({_id : str }, finishedTask)
                .then( () =>{
                    return this.getTask(str);
                    console.log('\n');
                })

            }).catch((err) =>{
                    console.error(err);
            });
        },

    getAllTasks(){
        return todo().then((todoItemsCollection) =>{
            return todoItemsCollection.find().toArray((err,docs) =>{
                docs.forEach((docs) => {
                    console.log(docs);
                })
            })
        }).catch((err) =>{
            console.error(err);
        });
    }
}

module.exports = methodsToExport;