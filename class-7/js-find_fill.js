//What is find?
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

//What is fill?
//The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. 
//It returns the modified array.

//------------------------------------------FIND------------------------------------------
const cgpa = [3.50, 3.75, 3.80, 3.90, 3.95, 4.00];
const findResult = cgpa.find((element) => element > 3.75);
console.log(findResult);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-7\js-find_fill.js"
// 3.8
//------------------------------------------FIND END------------------------------------------

//------------------------------------------FILL------------------------------------------
const studentID = [11, 22, 33, 44, 55, 66, 77, 88, 99];
studentID.fill(100, 4, 7);
console.log(studentID);

// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-7\js-find_fill.js"
// 3.8
// [
//   100, 100, 100,
//   100, 100, 100,
//   100, 100, 100
// ]

// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-7\tempCodeRunnerFile.js"
// [
//    11,  22,  33, 44,
//   100, 100, 100, 88,
//    99
// ]
//------------------------------------------FILL END------------------------------------------