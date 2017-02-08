const rf = require("./fileData");

console.log("Start of code");
let readResult = rf.getFileAsString("abc.txt");

readResult.then((data) => { 
    console.log(data);
}).catch((error) => {
    console.log(error);
}).then(() =>{
    console.log("Done reading file");
})

let readJSONResult = rf.getFileAsJSON();

readJSONResult.then((data) => {
    console.log(data);
}).catch((error) =>{
    console.log(error);
}).then(()=>{
    console.log(error);
})