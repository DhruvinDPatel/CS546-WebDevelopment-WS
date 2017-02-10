let tm = require('./textMatric');
let fd = require('./fileData');
let fs = require('fs');

let doSomething = (filename) =>{
    let check = filename.replace(/(\.)\w+/g,'').concat('.result.json');
    fs.stat(check, (error, stats_data)  => {
        if(error){
            return console.error(error);
        }
        if(stats_data.isFile()){
            fs.readFile(check, "utf-8", (error, data) => {
                try{
                    let jsonData = JSON.parse(data);
                    console.log(jsonData);
                }catch(error){
                    return console.error(error);
                }
            });
        }else{
            let readResult = fd.getFileAsString(filename);
            
            readResult.then((data) => { 
                //content of file is stored in data:
                let simplifiedData = tm.simplify(data);
                let checkDebugFile = check.concat('.debug.txt');
                let checkJSONFile = check.concat('.result.json');

                //store resulting content in filename.debug.txt
                fs.writeFile(checkDebugFile, simplifiedData, (error) => {
                    if(error){
                        return console.error(error);
                    }
                    console.log(`${checkDebugFile} is generated`);
                });

                let textMatricResult = tm.createMatrics(simplifiedData);

                let saveJSONToFile = rf.saveJSONToFile(checkJSONFile,textMatricResult);

                console.log(saveJSONToFile);
            }).catch((error) => {
            console.log(error);
            })
        
        }
    })
}

doSomething("chapter1.txt")