function tringle(n){
    let c = n - 1;
    let j = 0, i = 0;
    try{
        if(typeof(n) === 'number' && n > 0){
            console.log("Drwaing tringle of height:"+n);
            do{
                let frontSpace = ' '.repeat(c);
                if( i === n-1){
                    console.log("/"+"-".repeat(i*2)+"\\");
                }else{
                    console.log(frontSpace+"/"+" ".repeat(j)+"\\");
                }
                c--;
                j+=2;
                i++;
            }while(i<n);
        }
        else{
            throw "Exception: Invalid Arguments";
        }
        console.log();
    }catch(e){
        console.log(e);
    }
}

tringle(10);

function square(n){
    let i = 0;
    try{
        if(typeof(n) === 'number' && n > 1){
            console.log("Drwaing square having ${n} rows");
            do{
                let frontSpace = '\t';
                if( i === n-1 || i === 0){
                    console.log(frontSpace+"|"+"-".repeat(n)+"|");
                }else{
                    console.log(frontSpace+"|"+" ".repeat(n)+"|");
                }
                i++;
            }while(i<n);
        }else{
            throw "Exception: Invalid Arguments";
        }
        console.log();
    }catch(e){
        console.log(e);
    }
}

square(1);
square("Abc");
square(-25);
square(2);
square(3);