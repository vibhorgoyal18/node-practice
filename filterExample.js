// filtering the even numbers from array using filter method
let arr = [
    23, 3, 83, 41, 87, 46, 61, 47, 12, 17, 93, 58, 89, 77, 55, 89, 99, 21, 79,
    24,
];

let even = arr.filter((number) => number % 2 == 0);
console.log(even);
