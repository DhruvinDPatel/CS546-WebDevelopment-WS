function tree(n){
    let c = n - 1;
    let j = 0, i = 0;
    console.log("Drwaing tree of height:"+n);
    do{
        let fs = ' '.repeat(c);
        if( i === n-1){
            console.log("/"+"-".repeat(i*2)+"\\");
        }else{
            console.log(fs+"/"+" ".repeat(j)+"\\");
        }
        c--;
        j+=2;
        i++;
    }while(i<n);
    console.log("______________");
}

tree(1);
tree(2);
tree(3);
tree(25);