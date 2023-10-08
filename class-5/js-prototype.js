//What is prototype?
//Every object in JavaScript has a prototype. The prototype is also an object.
//All JavaScript objects inherit their properties and methods from their prototype.
//--------------------------------------------------PROTOTYPE CHAIN--------------------------------------------------
class Person {
  constructor(name) {
    this.name = name;
  }
  personMethod() {
    return `I am ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  studentMethod() {
    return `${this.name} is a ${this.grade}.`;
  }
}

let ahmed = new Student("Ahmed Shafin", "university graduate");

console.log(ahmed.personMethod());
console.log(ahmed.studentMethod());

// // Output:
// // [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-5\tempCodeRunnerFile.js"
// // I am Ahmed Shafin.
// // Ahmed Shafin is a university graduate.
//--------------------------------------------------PROTOTYPE CHAIN END--------------------------------------------------

//---------------------------------------------------FUNCTION PROTOTYPE---------------------------------------------------
//Function prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.personFunc = function () {
  return `I am ${this.name} and I am ${this.age} years old.`;
};

let shafin = new Person("Ahmed Shafin", 26);

console.log(shafin.personFunc());

// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-5\js-prototype.js"
// I am Ahmed Shafin and I am 30 years old.

//---------------------------------------------------FUNCTION PROTOTYPE END---------------------------------------------------
