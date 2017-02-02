const printShape = require("./printShape");

let lines = [ 4, 1, 0, 7, 2, 3, 6, 10, 8, 5, 9];

console.log("Let's print shapes:-)");

for (let i =0 ; i < lines.length ; i ++){
    printShape.tringle(lines[i]);
    printShape.square(lines[i]);
    printShape.rhombus(lines[i]);
}
console.log("END");