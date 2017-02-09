const fs = require('fs');
let fileData = exports = module.exports;

fileData.getFileAsString = (filename) => {
    return new Promise((fulfill, reject) => {
        if(!filename) throw reject("EXCEPTION: File path not provided");

        fs.readFile(filename, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            try{
                let s = data.toString(); 
                fulfill(s);
                //console.log("Done reading file");
            }catch(error){
                reject(error);
            }
        });
    })
};

fileData.getFileAsJSON = (filename) => {
    return new Promise((fulfill, reject) => {
        if(!filename) throw reject("EXCEPTION: JSON File path not provided");

        fs.readFile(filename, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            try{
                let JSONdata = JSON.parse(data);
                fulfill(JSONdata);
                //console.log("Done reading JSON");
            }catch(parsingerror){
                reject(parsingerror);
            }
        });
    })
}

fileData.saveStringToFile = (filename, text) => {
    return new Promise((fulfill, reject) => {
        if(!filename || !text) throw reject("EXCEPTION: file or text not provided");

        if(filename){
            fs.appendFile(filename, text, (error) => {
                if(error){
                    reject(error);
                    return;
                }
                fulfill('true');
            });
        }else{
            fs.writeFile(filename, text, (error) => {
                if(error){
                    reject(error);
                    return;
                }
                fulfill('true');
            });
        }
    });
};
