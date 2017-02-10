let tm = require('./textMatric');       
let fd = require('./fileData');
let fs = require('fs');

let doSomething = (filename) => {
    let check = filename.replace(/(\.)\w+/g,'').concat('.result.json'); //for removing extension txt and adding .result.json
    if(fs.existsSync(check)){       // checking existence of file
        fs.readFile(check, "utf-8", (error, data) => {
            try{
                let jsonData = JSON.parse(data);
                console.log(`${check} : ALREADY EXISTS, Displaying Data\n`);
                console.log(jsonData);
            }catch(error){
                return console.error(error);
            }
        });
    }else{      // if file does not exist
        let readResult = fd.getFileAsString(filename);
        
        readResult.then((data) => { 
            //content of file is stored in data:
            let simplifiedData = tm.simplify(data);
            let checkDebugFile = filename.replace(/(\.)\w+/g,'').concat('.debug.txt');

            //store resulting content in filename.debug.txt
            fs.writeFile(checkDebugFile, simplifiedData, (error) => {
                if(error){
                    return console.error(error);
                }
                console.log(`${checkDebugFile} is generated.`);
            });

            let textMatricResult = tm.createMatrics(simplifiedData);

            let saveJSONToFile = fd.saveJSONToFile(check,textMatricResult); // saving JSON object to file filename.json.result

                saveJSONToFile.then((data) => {
                    console.log(`${check} is generated`)
                }).catch((error) => {
                    console.log(error);
            })
            console.log(saveJSONToFile);

        }).catch((error) => {
        console.log(error);
        })        
    }
}

doSomething("chapter1.txt");
doSomething("chapter2.txt");
doSomething("chapter3.txt");