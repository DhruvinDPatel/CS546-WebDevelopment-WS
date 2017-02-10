const tm = require("./textMatric");

//let simplifiedString = tm.simplify("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
//console.log(simplifiedString);

let str = tm.createMatrics("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23");

console.log(str);