const fd = require("./fileData");

//console.log("Start of code");
let readResult = fd.getFileAsString("abc.txt");

readResult.then((data) => { 
    console.log(`Content of file: ${data}`);
}).catch((error) => {
    console.log(error);
})

let readJSONResult = fd.getFileAsJSON("xyz.json");

readJSONResult.then((data) => {
    console.log("Content of JSON file:");
    console.log(data);
}).catch((error) =>{
    console.log(error);
})

let saveStringResult = fd.saveStringToFile("abc.txt",'\nappended string');

saveStringResult.then((data) => {
    console.log(data+" :String added");
}).catch((error) => {
    console.log(error);
})

let sampleObj = {
    "1":    {
        "name": "Alax Mercer",
        "desc": "Sample object 1"
    },
    "2":    {
        "name": "Clifton Collins",
        "desc": "Sample object 2"
    }
}

let saveJSONToFile = fd.saveJSONToFile("cde.txt",sampleObj);

saveJSONToFile.then((data) => {
    console.log(data+" :Object Added");
}).catch((error) => {
    console.log(error);
})

