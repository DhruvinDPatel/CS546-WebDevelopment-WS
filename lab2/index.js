const printShape = require("./printShape");
const prompt = require("prompt");

function getInfo() {
    prompt.start();

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
        type: "boolean",
        required: true
    };

    // function stringToOperation(str) {
    //     if (!str) return "add";

    //     if (str === "*" || str === "multiply") return "multiply";

    //     if (str === "/" || str === "divide") return "divide";

    //     if (str === "-" || str === "subtract") return "subtract";

    //     return "add";
    // }

    // 
    // Get two properties from the user: username and email 
    // 
    prompt.get([choose_shape, lines, quitPrompt], function (err, result) {
        if (result) {
            let lines = result.lines;

            if (isNaN(lines)) {
                console.log("It is not a number");
                getInfo();
                return;
            }

            let quit = result.quit;

//            let operation = stringToOperation(result.operation);

            let shapeFunction = undefined;

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

            if (!quit) {
                getInfo();
            }
        } else if (err) {
            console.error(err)
        }
    });
}

getInfo();