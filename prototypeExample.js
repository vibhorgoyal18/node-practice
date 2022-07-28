// function Student(id, name) {
//     this.id = id;
//     this.stName = name;
// }

// Student.prototype.getId = function () {
//     return this.id;
// };

// Student.prototype.getName = function () {
//     return this.stName;
// };

// let s1 = new Student(10, "Rajesh");
// console.log(`${s1.getId()} => ${s1.getName()}`);

Array.prototype.even = function () {
    return this.filter((num) => num % 2 == 0);
};

let arr = [3, 6, 9, 4, 10, 13];

let evenArray = arr.even();
console.log(evenArray);

arr = [13, 16, 19, 14, 1, 3];

evenArray = arr.even();
console.log(evenArray);

let arr2 = new Array();
