const fs = require('fs');
let fileData = exports = module.exports;

fileData.getFileAsString = (path) => {
    return new Promise((fulfil, reject) => {
        if(!path) throw "File path not provided";

        fs.readFile(path, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            try{
                fulfil(data);
            }catch(error){
                reject(error);
            }
        });
    })
};