//check using if statement
let x = 10;
if (x == 10) {
  console.log("x is equal to 10");
}

//check using if else statement
let i = 11;
if (i == 10) {
  console.log("x is equal to 10");
} else {
  console.log("x is not equal to 10");
}

let a = 10;
let b = 20;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

//check using if else if statement
const time = new Date();
const hour = time.getHours();
console.log("current time is: " + hour);

if (hour >= 0 && hour < 12) {
  console.log("it is morning now");
} else if (hour >= 12 && hour < 24) {
  console.log("it is afternoon now");
} else {
  console.log("it is evening now");
}

//check using switch statement
const mark = 33;
let letterGrade;
let gradePoint;

switch (true) {
  case mark >= 90 && mark <= 100:
    letterGrade = "A+";
    gradePoint = 4.0;
    break;
  case mark >= 85 && mark < 90:
    letterGrade = "A";
    gradePoint = 3.75;
    break;
  case mark >= 80 && mark < 85:
    letterGrade = "B+";
    gradePoint = 3.5;
    break;
  case mark >= 75 && mark < 80:
    letterGrade = "B";
    gradePoint = 3.25;
    break;
  case mark >= 70 && mark < 75:
    letterGrade = "C+";
    gradePoint = 3.0;
    break;
  case mark >= 65 && mark < 70:
    letterGrade = "C";
    gradePoint = 2.75;
    break;
  case mark >= 60 && mark < 65:
    letterGrade = "D+";
    gradePoint = 2.5;
    break;
  case mark >= 50 && mark < 60:
    letterGrade = "D";
    gradePoint = 2.25;
    break;
  case mark < 50:
    letterGrade = "F";
    gradePoint = 0.0;
    break;
  default:
    letterGrade = "Invalid";
    gradePoint = 0.0;
}
console.log(`Numerical Grade: ${mark}`);
console.log(`Letter Grade: ${letterGrade}`);
console.log(`Grade Point: ${gradePoint}`);

//print array elements using for loop
const array = ["l", "e", "a", "r", "n", "a", "t", "h", "o", "n"];

for (let j = 0; j < array.length; j++) {
  console.log(array[j]);
}

//print array elements in reverse order using for loop
const array2 = ["l", "e", "a", "r", "n", "a", "t", "h", "o", "n"];

for (let i = array2.length - 1; i >= 0; i--) {
  console.log(array2[i]);
}

//nested for loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(i, j);
  }
}

//use of do while loop
let count = 1;

do {
  console.log(`This is iteration number ${count}`);
  count++;
} while (count <= 11);

//store function as a expression
var funcExp = function (i, j) {
  return i + j;
};
console.log(funcExp(9, 11));
