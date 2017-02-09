const rf = require("./fileData");

//console.log("Start of code");
let readResult = rf.getFileAsString("abc.txt");

readResult.then((data) => { 
    console.log(`Content of file: ${data}`);
}).catch((error) => {
    console.log(error);
})

let readJSONResult = rf.getFileAsJSON("xyz.json");

readJSONResult.then((data) => {
    console.log("Content of JSON file:");
    console.log(data);
}).catch((error) =>{
    console.log(error);
})

let saveStringResult = rf.saveStringToFile("abc.txt",'\nappended string');

saveStringResult.then((data) => {
    console.log(data+" :String added");
}).catch((error) => {
    console.log(error);
})