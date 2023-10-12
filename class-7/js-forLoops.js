//JavaScript supports different kinds of loops
//For loop - Loops through a block of code a number of times
//While loop - Loops through a block of code while a specified condition is true
//Do while loop - Loops through a block of code once, and then repeats the loop while a specified condition is true

//For in loop - Loops through the properties of an object
//The for/in loop is used to iterate over the properties of an object. It works with objects that have enumerable properties.

//For of loop - Loops through the values of an iterable object
//The for/of loop is used to iterate over the values of an iterable object, such as arrays, strings, sets, and other collections.

//------------------------------------------FOR LOOP------------------------------------------
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//------------------------------------------FOR LOOP END------------------------------------------

//------------------------------------------WHILE LOOP------------------------------------------
let count = 0;

while (count < 5) {
  console.log("Count:", count);
  count++;
}
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
//------------------------------------------WHILE LOOP END------------------------------------------

//------------------------------------------DO WHILE LOOP------------------------------------------
let num = 2;

do {
  console.log("Number:", num);
  num++;
} while (num <= 5);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// Number: 10

// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// Number: 2
// Number: 3
// Number: 4
// Number: 5
//------------------------------------------DO WHILE LOOP END------------------------------------------

//------------------------------------------FOR IN LOOP------------------------------------------
const loopsInJs = {
  forLoop: "Loops through a block of code a number of times",
  whileLoop:
    "Loops through a block of code while a specified condition is true",
  doWhileLoop:
    "Loops through a block of code once, and then repeats the loop while a specified condition is true",
  forInLoop: "Loops through the properties of an object",
  forOfLoop: "Loops through the values of an iterable object",
};

for (const key in loopsInJs) {
  console.log(`${key}: ${loopsInJs[key]}`);
}
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// forLoop: Loops through a block of code a number of times
// whileLoop: Loops through a block of code while a specified condition is true
// doWhileLoop: Loops through a block of code once, and then repeats the loop while a specified condition is true
// forInLoop: Loops through the properties of an object
// forOfLoop: Loops through the values of an iterable object
//------------------------------------------FOR IN LOOP END------------------------------------------

//------------------------------------------FOR OF LOOP------------------------------------------
const loopsOfJs = [
  "forLoop",
  "whileLoop",
  "doWhileLoop",
  "forInLoop",
  "forOfLoop",
];

for (const loop of loopsOfJs) {
  console.log(loop);
}
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// forLoop
// whileLoop
// doWhileLoop
// forInLoop
// forOfLoop
//------------------------------------------FOR OF LOOP END------------------------------------------
