/*
    Dhruvin D Patel
    10420356
    dpate78@stevens.edu
*/

// first functiion

let findSquare = (x) => {
    if(typeof(x) === 'number'){ 
        return x * x;
    }
    return null;
}

let sumOfSquares = (num1, num2, num3) => {
    return(findSquare(num1) + findSquare(num2) + findSquare(num3));
}

console.log(sumOfSquares(5,3,10));

// second function

function sayHelloTo(firstName,lastName,title){
    switch(arguments.length){
        case 1: console.log("Hello "+ firstName + "!");
            break;
        case 2: console.log("Hello, "+ firstName + " " + lastName + " I hope  you are having a good day!");
            break;
        case 3: console.log("Hello, " + title + " " + firstName + " " + lastName + "!! Have a good evening");
            break;
        default: console.log("/!\ Missing arguments");
            break;
    }
}

sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");

//third function

