const todoItems = require('./todo.js');
const connection = require('./dbConnection');

/*
let createdTask = todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
let taskAdded = createdTask.then((newTask) => {
	console.log(newTask);
}).catch((err) => {
	console.log(err);
});

let createdTask2 = todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?")
	.catch((err) => {
		console.log(err);
});

let allTasks = taskAdded.then(() => {
    return todoItems.getAllTasks();
}).catch((err) => {
	console.log(err);
});

*/
//                     REMOVE TASK                                  //

let removeTask = todoItems.removeTask('id_to_be_removed');
let tryToGetTask = removeTask.then(() => {
	return todoItems.getTask('id_to_be_removed');
}).catch((err) => {
	console.log(err);
});
	
let allTasks2 = tryToGetTask.then(() => {
    return todoItems.getAllTasks();
}).catch((err) => {
	console.log(err);
});


//                     COMPLETE TASK                             //

let taskPromise = todoItems.getTask('id_to_be_updated');
let finishedTask = taskPromise.then((task) => {
	return todoItems.completeTask(task._id);
}).then((completedTask) => {
	//console.log(completedTask);
}).catch((err) => {
	console.log(err);
});

 
let allTasks3 = finishedTask.then(() => {
    return todoItems.getAllTasks();
}).catch((err) => {
	console.log(err);
});