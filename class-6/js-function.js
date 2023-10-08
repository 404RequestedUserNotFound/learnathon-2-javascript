//What is Pure function?
//A pure function is a function that has the following properties:
//It returns the same result if given the same arguments
//It does not cause any observable side effects
//It does not read external files
//It does not rely on a random number generator

//What is Higher Order Function?
//A higher order function is a function that takes a function as an argument, or returns a function.


//What is Call, Blind and Apply?
//Call, Blind and Apply are the methods of Function.prototype.
//Call and Apply are very similar in their usage except a little difference.
//Call takes the arguments separately.
//Apply takes the arguments as an array.
//Bind returns a new function, allowing you to pass any number of arguments.

//-----------------------------PURE FUNCTION---------------------------------
function finalResult(quiz, assignment, finalExam) {
    let total = quiz + assignment + finalExam;
    return total;
}
console.log("You have got " + finalResult(10, 20, 30));
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\js-function.js"
// You have got 60
//-----------------------------PURE FUNCTION END---------------------------------

//-----------------------------HIGHER ORDER FUNCTION---------------------------------
function finalResult(quiz, assignment, finalExam) {
    let total = quiz + assignment + finalExam;
    return total;
}

function grade(finalResult) {
    if (finalResult >= 80) {
        return "A";
    } else if (finalResult >= 70) {
        return "B";
    } else if (finalResult >= 60) {
        return "C";
    } else if (finalResult >= 50) {
        return "D";
    } else {
        return "F";
    }
}
console.log("You have got " + grade(finalResult(10, 20, 30)));
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\js-function.js"
// You have got 60
// You have got C
//-----------------------------HIGHER ORDER FUNCTION END---------------------------------

//-----------------------------CALL, BLIND AND APPLY---------------------------------
let portfolio = {
    name: "Ahmed Shafin",
    emplymentStatus: "!Employed"
};

function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}. And I am ${this.emplymentStatus}`);
}

introduce.call(portfolio, "Hi");
introduce.apply(portfolio, ["Hi"]);
let introduceBind = introduce.bind(portfolio);
introduceBind("Hi");


// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// Hi, I'm Ahmed Shafin. And I am !Employed
// Hi, I'm Ahmed Shafin. And I am !Employed
// Hi, I'm Ahmed Shafin. And I am !Employed
//-----------------------------CALL, BLIND AND APPLY END---------------------------------