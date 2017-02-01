function tringle(n){
    let c = n - 1;
    let j = 0, i = 0;
    try{
        if(typeof(n) === 'number' && n > 0){
            console.log(`Drwaing tringle of height:`+n);
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

//tringle(10);

function square(n){
    let i = 0;
    try{
        if(typeof(n) === 'number' && n > 1){
            console.log(`Drwaing square having ${n} rows`);
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

// square(1);
// square("Abc");
// square(-25);
// square(2);
// square(3);
// square(10);

function rhombus(n){
    let i = 0, j = 1, c = n;
    try{
        if(typeof(n) === 'number' && n > 1 && n%2 === 0){
            console.log(`Drwaing rhombus having ${n} lines`);
            do{
                let frontSpace = " ";
                if( i === 0){
                    console.log(frontSpace.repeat(n)+"/"+"-"+"\\");
                }else if( i === n-1){
                    console.log(frontSpace.repeat(n)+"\\"+"-"+"/");
                }else if( i < n/2){
                    c--;
                    j+=2;
                    console.log(frontSpace.repeat(c)+"/"+" ".repeat(j)+"\\");
                }
                else{
                    console.log(frontSpace.repeat(c)+"\\"+" ".repeat(j)+"/");
                    c++;
                    j-=2;
                }
                i++;
            }while(i<n);
            console.log();
        }else{
            throw "Exception: Invalid Arguments";
        }
    }catch(e){
        console.log(e);
    }
}

rhombus(2);
rhombus(3);
rhombus(4);
rhombus(6);
rhombus(10);
rhombus(42);