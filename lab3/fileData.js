const fs = require('fs');
let fileData = exports = module.exports;

fileData.getFileAsString = (filename) => {
    return new Promise((fulfill, reject) => {
        if(!filename) throw reject("File path not provided");

        fs.readFile(filename, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            try{
                let s = data.toString(); 
                fulfill(s);
            }catch(error){
                reject(error);
            }
        });
    })
};

fileData.getFileAsJSON = (filename) => {
    return new Promise((fulfill, reject) => {
        if(!filename) throw reject("File path not provided");

        fs.readFile(filename, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            try{
                let d = JSON.parse(data);
                fulfill(d);
            }catch(error){
                reject(error);
            }
        });
    })
}