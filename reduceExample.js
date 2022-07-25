// Finding the largest number using reduce
let arr = [4, 3, 2, 9, 1];

let temp = arr.reduce(
    (largestNumber, number) =>
        largestNumber > number ? largestNumber : number,
    arr[0]
);

console.log(temp);
