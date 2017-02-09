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

let sampleObj = {
    "1":    {
        "name": "Alan Mercer",
        "desc": "Sample object 1"
    },
    "2":    {
        "name": "Clifton Collins",
        "desc": "Sample object 2"
    }
}

let saveJSONToFile = rf.saveJSONToFile("cde.txt",sampleObj);

saveStringResult.then((data) => {
    console.log(data+" :Object Added");
}).catch((error) => {
    console.log(error);
})

