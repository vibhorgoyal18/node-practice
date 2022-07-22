// let temp = "codingBlaze";
// console.log(typeof(temp));
//
// temp = true;
// console.log(typeof(temp));
//
// temp = 4;
// console.log(typeof(temp));
//
let arr = [10, 30, 50, 40];
//[0,   1,  2,  3]
let arr2 = [];

// console.log({arr2})
arr2[2] = 55;
// console.log({arr2})
// console.log({arr})
// console.log({ arr, arr2 });

let students = [
    {
        name: "Rohan",
        id: 1,
        marks: { english: 67, maths: 15, science: 80 },
    },
    {
        name: "Rohit",
        id: 2,
        marks: { english: 76, maths: 51, science: 8 },
    },
];
// for (let i = students.length - 1; i >= 0; i--) {
//     students[i].averageMarks =
//         (students[i].marks.english +
//             students[i].marks.maths +
//             students[i].marks.science) /
//         3;
//     students[i].result =
//         students[i].marks.english >= 33 &&
//         students[i].marks.maths >= 33 &&
//         students[i].marks.science >= 33
//             ? "Pass"
//             : "Fail";
//     console.log(students[i]);
// }
// let reversedStudents = students.reverse();
// for (let student of reversedStudents) {
//     student.averageMarks =
//         (student.marks.english + student.marks.maths + student.marks.science) /
//         3;
//     student.result =
//         student.marks.english >= 33 &&
//         student.marks.maths >= 33 &&
//         student.marks.science >= 33
//             ? "Pass"
//             : "Fail";
//     console.log(student);
// }

students.forEach((student) => {
    student.averageMarks =
        (student.marks.english + student.marks.maths + student.marks.science) /
        3;
    student.result =
        student.marks.english >= 33 &&
        student.marks.maths >= 33 &&
        student.marks.science >= 33
            ? "Pass"
            : "Fail";
    console.log(student);
});

// let tempArray = [10, 20, 30, 40, 50];
// for (let tempVar of tempArray) {
//     if (tempVar == 40) continue;
//     console.log(tempVar);
// }
