//variable type
const variable_a = typeof 404;
const variable_b = typeof "learnathon";
const variable_array = typeof [
  "L",
  "E",
  "A",
  "R",
  "N",
  "A",
  "T",
  "H",
  "O",
  "N",
];

console.log("variable_a is a: " + variable_a);
console.log("variable_b is a: " + variable_b);
console.log("variable_array is a: " + variable_array);

//local variable
function localvariableFunc(i, j) {
  let localVariable = i + j;
  console.log("local variable is: " + localVariable);
}
localvariableFunc(10, 20);

//global variable
let globalVariable = 10;

function globalvariableFunc() {
  console.log("Global variable is : " + globalVariable);
}
globalvariableFunc();
