class Student {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.stName = studentName;
    }

    setId(studentId) {
        this.id = studentId;
    }

    setName(studentName) {
        this.stName = studentName;
    }

    getId = () => this.id;

    getName = () => this.stName;

    printStudent() {
        console.log(`${this.id}: ${this.stName}`);
    }
}

let s1 = new Student(1, "Raj");
s1.printStudent();

let s2 = new Student();
s2.setId(2);
s2.setName("Rohit");
s2.printStudent();
