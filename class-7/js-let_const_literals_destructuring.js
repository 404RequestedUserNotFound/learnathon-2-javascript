//What is let?
//Let is a new keyword introduced in ES6. It is similar to var, in that we can use it to declare variables. 
//However, unlike var, let is block scoped. This means that if we declare a variable using let inside a block, we can only access it inside that block.

//What is const?
//const is another new keyword introduced in ES6. It is also block scoped, like let.

//What is literal?
//A literal is a value that we can assign to a variable.

//What is destructuring?
//Destructuring is a way to extract values from objects and arrays.

//------------------------------------------LET------------------------------------------
let cgpa = 3.5;

function getCGPA() {
    return cgpa;
}
console.log(getCGPA());
//------------------------------------------LET END------------------------------------------

//------------------------------------------CONST------------------------------------------
const gpa = 5.00;

function getGPA() {
    return gpa;
}
console.log(getGPA());
//------------------------------------------CONST END------------------------------------------

//------------------------------------------LITERALS------------------------------------------

const result = 3.50;
const studentName = "Ahmed Shafin";

function getResult(result, studentName) {
    return 'Result of ' + studentName + ' is ' + result;
}

console.log(getResult(result, studentName));
//------------------------------------------LITERALS END------------------------------------------

//------------------------------------------DESTRUCTURING------------------------------------------
const student = {
    university: "American International University-Bangladesh",
    name: "Ahmed Shafin",
    id: "19-41298-3",
    cgpa: 3.50
};
console.log(student.name);
console.log(student.id);
console.log(student.name + " and " + student.university);
//------------------------------------------DESTRUCTURING END------------------------------------------