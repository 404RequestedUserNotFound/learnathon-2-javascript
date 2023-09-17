//---------------------------------------------------------------Variable Hoisting-------------------------------------------------------------------
// Variable declarations (using var, let, or const) are hoisted to the top of their containing function or global scope.
var hoistedVar;
console.log(hoistedVar);
hoistedVar = 404;
//output: undefined

var hoistedVar;
hoistedVar = 404;
console.log(hoistedVar);
//output: 404
//---------------------------------------------------------------Variable Hoisting-END-------------------------------------------------------------------

//---------------------------------------------------------------FUnction Hoisting-------------------------------------------------------------------
function hoistedFunc() {
  console.log("i am from hoistedFunc");
}
hoistedFunc();

hoistedFunc2();
function hoistedFunc2() {
  console.log("i am from hoistedFunc2");
}
//---------------------------------------------------------------FUnction Hoisting-END-------------------------------------------------------------------
