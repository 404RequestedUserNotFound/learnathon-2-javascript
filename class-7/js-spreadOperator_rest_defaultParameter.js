//What is spread operator?
//Spread operator is a new operator introduced in ES6. It is represented by three dots (...)

//What is rest parameter?
// The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. 
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 

//What is default parameter?
//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//------------------------------------------SPREAD OPERATOR------------------------------------------

const studentID = [25, 26, 27, 28, 29];
const studentResult = [...studentID, 30, 31, 32, 33, 34];

console.log(studentResult);

//------------------------------------------SPREAD OPERATOR END------------------------------------------

//------------------------------------------REST PARAMETER------------------------------------------
function calculator(...numbers) {
    let result = 0;
    for (let i of numbers) {
        result += i;
    }
    return result;
}
console.log(calculator(70, 30));
console.log(calculator(111, 7));
//------------------------------------------REST PARAMETER END------------------------------------------

//------------------------------------------DEFAULT PARAMETER------------------------------------------
function mul(a, b) {
    return a * b;
}
console.log(mul(7, 2));
console.log(mul(5));
//------------------------------------------DEFAULT PARAMETER END------------------------------------------