/*
    Lab 2 - CS546 Web Programming
    Dhruvin Dineshbhai Patel
    CWID: 10420356
    dpate78@stevens.edu
*/

module.exports = {
    description: "this is module for the lab2 which will print different shapes on console",
    tringle : (lines) => {
        let counter = lines - 1;
        let internalSpace = 0, i = 0;
        try{
            if(typeof(lines) === 'number' && lines > 0){
                console.log(`Drwaing tringle of height:`+lines);
                do{
                    let frontSpace = ' '.repeat(counter);
                    if( i === lines-1){                 // everyother row
                        console.log("/"+"-".repeat(i*2)+"\\");
                    }else{                              // for last row
                        console.log(frontSpace+"/"+" ".repeat(internalSpace)+"\\");
                    }
                    counter--;
                    internalSpace+=2;
                    i++;
                }while(i<lines);
            }
            else{
                throw `Exception: Invalid Argument: ${lines} for tringle`;
            }
            console.log();
        }catch(e){
            console.log(e);
        }
    },

    square: (lines) => {
        let i = 0;
        try{
            if(typeof(lines) === 'number' && lines > 1){
                console.log(`Drwaing square having ${lines} rows`);
                do{
                    let frontSpace = '\t';
                    if( i === lines-1 || i === 0){                 // for the first and last row
                        console.log(frontSpace+"|"+"-".repeat(lines)+"|");
                    }else{                                         // for any other row
                        console.log(frontSpace+"|"+" ".repeat(lines)+"|");
                    }
                    i++;
                }while(i<lines);
            }else{
                throw `Exception: Invalid Argument: ${lines} for square`;
            }
            console.log();
        }catch(e){
            console.log(e);
        }
    },
    rhombus: (lines) => {
        let i = 0, internalSpace = 1, counter = lines;
        try{
            if(typeof(lines) === 'number' && lines > 1 && lines%2 === 0){
                console.log(`Drawing rhombus having ${lines} lines`);
                do{
                    let frontSpace = " ";
                    if( i === 0){                                   // for the first row
                        console.log(frontSpace.repeat(lines)+"/"+"-"+"\\");
                    }else if( i === lines-1){                       // for the last row
                        console.log(frontSpace.repeat(lines)+"\\"+"-"+"/");
                    }else if( i < lines/2){                         // for upper tringle rows
                        counter--;
                        internalSpace+=2;
                        console.log(frontSpace.repeat(counter)+"/"+" ".repeat(internalSpace)+"\\");
                    }
                    else{                                           // for lower tringle rows
                        console.log(frontSpace.repeat(counter)+"\\"+" ".repeat(internalSpace)+"/");
                        counter++;
                        internalSpace-=2;
                    }
                    i++;
                }while(i<lines);
                console.log();
            }else{
                throw `Exception: Invalid Argument: ${lines} for rhombus`;
            }
        }catch(e){
            console.log(e);
        }
    }
}