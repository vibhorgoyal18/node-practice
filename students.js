// let temp = "codingBlaze";
// console.log(typeof(temp));
//
// temp = true;
// console.log(typeof(temp));
//
// temp = 4;
// console.log(typeof(temp));
//
// let arr = [10, 30, 50, 40]
//         //[0,   1,  2,  3]
// let arr2 = arr
//
// console.log({arr2})
// arr2[2] = 55;
// console.log({arr2})
// console.log({arr})

// let student = [
//     {
//         name: 'Rohan',
//         id: 1,
//         marks: {english: 67, maths: 15, science: 80},
//     },
//     {
//         name: 'Rohit',
//         id: 2,
//         marks: {english: 76, maths: 51, science: 8},
//     }
// ]


// console.log(Object.keys(student.marks))
// console.log(JSON.stringify(student, undefined, 4))


// if (averageMarks >= 33) {
//     student.result = "Pass"
// } else {
//     student.result = "Fail"
// }

let student = {
    name: 'Rohan',
    id: 1,
    marks: {english: 67, maths: 15, science: 80},
}
let averageMarks = (student.marks.english + student.marks.maths + student.marks.english) / 3
student.result = averageMarks >= 33 ? "Pass" : "Fail";
// console.log(student[0].name)
