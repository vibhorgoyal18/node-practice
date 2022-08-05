// Array destructuring
// let arr = [19, 21, 42];
// let [a, b, c] = arr;

// console.log(a, b, c);

// const testFunction = () => [1, "string", true];
// // let stringVar = testFunction()[0];
// // let intVar = testFunction()[1];
// // let boolVar = testFunction()[2];

// let [stringVar, intVar, boolVar] = testFunction();

// console.log({ stringVar, intVar, boolVar });

// Object Destructuring

// let testObject = { id: 1, name: "Rohit", course: "B.tech", sem: "IV" };
const testFunction = () => {
    return { id: 1, name: "Rohit", course: "B.tech", sem: "IV" };
};
// function testFunction() {
//     return { id: 1, name: "Rohit", course: "B.tech", sem: "IV" };
// }
// let stName = testObject.name;
// let id = testObject.id;
// let course = testObject.course;

let { name, id, ...rest } = testFunction();

console.log(id, name, rest);
