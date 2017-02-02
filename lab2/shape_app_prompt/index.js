const printShape = require("./printShape");
const prompt = require("prompt");

function getInfo() {
    prompt.start();
    prompt.get(['shape', 'lines'], function(err, result){
        console.log("Enter Shape: ");
        console.log('Shape: ' + result.shape);
        let inputShape = result.shape;
        if((inputShape == "triangle") || (inputShape == "square") || (inputShape == "rhombus")){
            console.log('Enter lines: ' +  result.lines);
            let inputLines = parseInt(result.lines);

            if( inputLines != ""){
                printShape.tringle(inputLines);
            }else{
                console.log("Invalid number of Lines");
               
            }
            
        }else{
            console.log("Invalid Input");
            getInfo();
        }
    })
    /*
    const choose_shape = {
        name: 'choose_shape',
        description: 'Which shape you want to do print on console?',
        type: 'number',                 // Specify the type of input to expect.
        default: 'tringle',             // Default value to use if no value is entered.
        required: true                  // If true, value entered must be non-empty.
    };

    const lines = {
        name: 'lines',
        description: 'Enter number of lines you want to print of the selected shape',
        type: 'number',
        required: true
    };

    const quitPrompt = {
        name: 'quit',
        description: 'Do you want to quit after drawing this shape?',
        type: 'boolean',
        required: true
    };

    // 
    // Get two properties from the user: username and email 
    // 
    prompt.get([choose_shape, lines, quitPrompt], function (err, result) {
        if (result) {
            let lines = result.lines;
            let quit = result.quit;
            let shapeFunction = undefined;

            if (isNaN(lines)) {
                console.log("Not a number");
                getInfo();
                return;
            }

            switch (choose_shape) {
                case "tringle":
                    shapeFunction = printShape.tringle;
                    break;
                case "square":
                    shapeFunction = printShape.square;
                    break;
                case "rhombus":
                    shapeFunction = printShape.rhombus;
                    break;
            }

            shapeFunction(lines);

            if (!quit) {
                getInfo();
            }
        } else if (err) {
            console.error(err)
        }
    });
    */
}

getInfo();