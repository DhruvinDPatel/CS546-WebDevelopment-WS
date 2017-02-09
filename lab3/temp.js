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
    console.log("Content of JSON:");
    console.log(data);
}).catch((error) =>{
    console.log(error);
})

let saveStringResult = rf.saveStringToFile();

saveStringResult.then(() => {
    console.log("Saving string to the file");
}).catch((error) => {
    console.log(error);
})