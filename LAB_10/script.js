
const student = {
    name: "sajet",
    age: 18,
    batch: "benjio",
};

console.log(student.name);

delete student.age;
console.log(student);


// Array of students
const students = ["tejas", "sajet", "KARMA", "CHINAR"];

// push() method adds elements to the end of an array
students.push("paji");
console.log(students);

students.push("langda", "aam");
console.log(students);

// spread operator to add multiple elements
// The spread operator (...) allows you to expand an array into individual elements.

const extraStudents = ["golu", "molu", "sachin"];
students.push(...extraStudents);
console.log(students);

// pop() method removes the last element and returns it
const lastStudent = students.pop();
console.log(students);
console.log(lastStudent);

// shift() method removes the first element and returns it
const firstStudent = students.shift();
console.log(students);
console.log(firstStudent);

// unshift() method adds elements to the beginning
students.unshift("Tejas");
console.log(students);

// splice() method can be used to add or remove elements at a specific index
// remove 2 elements starting from index 1
students.splice(1, 2);
console.log(students);

// add elements at index 1
students.splice(1, 0, "newStudent1", "newStudent2");
console.log(students);

// replace elements at index 2
students.splice(2, 1, "replacedStudent");
console.log(students);

// reverse indexing does not work in js
console.log(students[-1]);

// we cannot create duplicate keys in an object, but we can have duplicate values in an array
const student1 = {
    name: "sajet",
    age: 18,
    batch: "benjio",
};

// this will update the name to new value
students[1] = "Sajet";