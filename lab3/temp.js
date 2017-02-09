const rf = require("./fileData");

console.log("Start of code");
let readResult = rf.getFileAsString("abc.txt");

readResult.then((data) => { 
    console.log(data);
}).catch((error) => {
    console.log(error);
})

let readJSONResult = rf.getFileAsJSON();

readJSONResult.then((data) => {
    console.log(data);
}).catch((error) =>{
    console.log(error);
})