/*
    Dhruvin D Patel
    10420356
    dpate78@stevens.edu
*/

// first functiion

function exceptionMsg(message){
	this.message = message;
}

let findSquare = (x) => {
    if(typeof(x) === 'number'){ 
        return x * x;
    }
    throw new exceptionMsg("Invalid Input, use numbers only");
}

let sumOfSquares = (num1, num2, num3) => {
    return(findSquare(num1) + findSquare(num2) + findSquare(num3));
}

console.log(sumOfSquares(5,3,10));

// second function

function sayHelloTo(firstName,lastName,title){
    try{
        switch(arguments.length){
        case 1: console.log("Hello "+ firstName + "!");
            break;
        case 2: console.log("Hello, "+ firstName + " " + lastName + " I hope  you are having a good day!");
            break;
        case 3: console.log("Hello, " + title + " " + firstName + " " + lastName + "!! Have a good evening");
            break;
        default: throw new exceptionMsg("/!\\ Missing arguments");
            break;
        }
    }catch(e){
        console.log(e.message);
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
            throw new exceptionMsg("Game is of 99 Cups of Coffee. Enter a value less than 100!!");;
        }
    }catch(e){
        throw new exceptionMsg("Invalid Input, use numbers only");
    }
}

cupsOfCoffee(5);

//forth function

function getSubstring(str, subStr) {
    var matches = str.match(new RegExp(subStr, "g"));
    console.log("The number of "+ subStr +" in " + str + " is :" + matches.length);
}

function occurrencesOfSubstring(fullString, substring){
	try{
        if((typeof(fullString) && typeof(substring) === 'string')){		// Checking if both Inputs are Strings
			fullString =  fullString.toLowerCase();									// Conversion to lower case  
			substring =  substring.toLowerCase();
			getSubstring(fullString, substring);									// Calculating the matches
			}
		else{
			throw new exceptionMsg("Please Enter a String!!");
		}	
	}
	catch(e){
		console.log(e.message);
	}
}

occurrencesOfSubstring("Helllllllo, class", "ll");
console.log();

// Randomize Sentences

function shuffleArray(a) {															// Shuffling the elements of the Array
	let j, k, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		k = a[i - 1];
		a[i - 1] = a[j];
		a[j] = k;
	}
}

function randomizeSentences(paragraph){
	try{
		let separator = '.';
		if(typeof(paragraph)==='string'){		// Checking if Input  is a String
			var array = paragraph.split(separator);							// Adding elements separatedd by the separator  in an Array
			shuffleArray(array); 
			console.log(array.join(''));										// Printing all the elements
		}
		else{
			throw new exceptionMsg("Please Enter a String");
		}
	}
	catch(e){
		console.log(e.message);
	}
}

randomizeSentences(" Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");