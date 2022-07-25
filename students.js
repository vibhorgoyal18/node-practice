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
    {
        name: "Rohan",
        id: 1,
        marks: { english: 67, maths: 15, science: 80 },
    },
];

// Simple For loop
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

// For..of loop
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

// For each loop
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
