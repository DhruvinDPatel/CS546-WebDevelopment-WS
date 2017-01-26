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
        default: console.log("/!\\ Missing arguments");
            break;
    }
}

sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");

//third function

function cupsOfCoffee(howManyCups){
	try{
        if((typeof howManyCups === 'number') && howManyCups <= 99){
        //throw new exceptionHandling("Game is 99 Cups of Coffee. Enter a value less than 100!!");
            for(let i = howManyCups; i>0; i--){
                if(i===1){ // If there is  only  one Cup
                    console.log(i + " cup of coffee on the desk!"+ i +" cup of coffee!")
                    console.log("Pick it up, drink the cup, no more coffee left on the desk!")
                }else{
                    console.log(i + " cups of coffee on the desk!"+ i +" cups of coffee!") // If there are more than one Cups
                    console.log("Pick one up, drink the cup,"+ (i-1) +" Cups of Coffee on the Desk ")
                }
                console.log();
            }
        }
        else{
            throw new exceptionHandling("Please Enter a Positive Integer");
        }
    }catch(e){
        console.log(e.message);
    }
}

cupsOfCoffee(5);