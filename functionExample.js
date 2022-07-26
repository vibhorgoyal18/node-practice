// Simple function with params
function addNumbers(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

addNumbers(2, 3);

// Function with default value
function area(a, b = null) {
    if (b != null)
        console.log(`The area of rectangle with side ${a}, ${b} is ${a * b}`);
    else {
        console.log(`The area of square with side ${a} is ${a * a}`);
    }
}

area(6);
area(6, 4);

// Function with return statement
function area(a, b) {
    return a * b;
}

console.log(area(5, 7));
console.log(area(5, 7) * 2);
console.log(area(5, 7) * 3);
console.log(area(5, 7) * 4);

let arr = [1, 2, 3];
let arr2 = [4, ...arr];
console.log({ arr, arr2 });

// function with spread operator
function sum(...arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sum(10, 11, 15, 9));
