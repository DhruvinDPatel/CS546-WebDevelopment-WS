/*
    Dhruvin D Patel
    10420356
    dpate78@stevens.edu
*/

// for square of a number

let findSquare = (x) => {
    if( x != Number ){ 
        return null;
    }
    return x * x;
}

let sumOfSquares = (num1, num2, num3) => {
    return findSquare(num1) + findSquare(num2) + findSquare(num3);
}

