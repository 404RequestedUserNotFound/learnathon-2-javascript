//log to console 
console.log('i am form script.js file');

//declared a variable with a string value and log to console
var a = 'i am a variable and i was declared using var keyword';
console.log(a);

//declared a variable with a numeric value and log to console
var b = 404;
console.log(b);

//declared a variable with a boolean value and log to console
var c = true;
console.log(c);

//declared a variable with a object value and log to console
var learnathon = {
    learnathon_course: 'javascript',
    learnathon_duration: '3 months',
    learnathon_by: 'Vivasoft',
};
console.log(learnathon);

//declared a variable with a numeric array value and log to console
var numeric_arr = [1, 2, 3, 4, 5];
console.log(numeric_arr);

//declared a variable with array string value and log to console
var string_arr = ['a', 'b', 'c', 'd', 'e'];
console.log(string_arr);

//declared a variable with a function and log to console
var funcvar = function(){
    console.log('i am from function called funcvar');
};
funcvar();

//declared a variable with a undefined value and log to console
var d;
console.log(d);

//declared a variable with a null value and log to console
var e = null;
console.log(e);

//------------------------------------------------------LET------------------------------------------------------//
// #1. declared a variable using let and log to console
// #2. variables  declared  with let cannot be Redeclared
// #3. variables  declared  with let must be Declared before use
// #4. variables  declared  with let have Block Scope, variables declared inside a {} block cannot be accessed from outside the block.

//#1.
let var_let = 'i am a variable and i was declared using let keyword';
console.log(var_let);

//#2.
//let var_let = "i am a variable and i was redeclared using let keyword";
//console.log(var_let);
//output: Uncaught SyntaxError: Identifier 'var_let' has already been declared (at script.js:53:5)

//#3.
//console.log(var_let_notdeclared);
//output: Uncaught ReferenceError: var_let_notdeclared is not defined at script.js:61:13

//#4.
{
    let var_let_block = 'i am a variable and i was declared inside a block using let keyword';
    console.log(var_let_block);
}

// {
//     let var_let_block = "i am a variable and i was declared inside a block using let keyword";
// }
// console.log(var_let_block);
// output: script.js:69  Uncaught ReferenceError: var_let_block is not defined at script.js:69:13


//------------------------------------------------------LET_END------------------------------------------------------//


//------------------------------------------------------CONST------------------------------------------------------//

// #1. declared a variable using const and log to console
// #2. variables declared with const cannot be Redeclared
// #3. variables declared with const cannot be Reassigned
// #4. variables declared with const have Block Scope

//#1.
const var_const = 'i am a variable and i was declared using const keyword';
console.log(var_const);

//#2.
// const _var_const = "i am a variable and i was redeclared using const keyword";
// console.log(_var_const);
// output: Uncaught SyntaxError: Identifier '_var_const' has already been declared (at script.js:91:7)


//#3.
const g = 9.8;
console.log('the value of gravity: ' + g);

// const g = 10;
// output:Uncaught SyntaxError: Identifier 'g' has already been declared (at script.js:99:7)

//#4.
{
    const var_const_block = 'i am a variable and i was declared inside a block using const keyword';
    console.log(var_const_block);
}    

// {
//     const var_const_block = "i am a variable and i was declared inside a block using const keyword";
// }    
// console.log(var_const_block);
// output: Uncaught ReferenceError: var_const_block is not defined at script.js:107:13

//------------------------------------------------------CONST_END------------------------------------------------------//

//regular function
function regFunc( a, b){
    return a + b;
};
console.log('output of regFunc: '+ regFunc(9,9));

function regFunc2(x){
    return x * x;
};
console.log('output of regFunc2: '+ regFunc2(9));

//basic operation
const sumFunc = (a, b) => a + b;
const subFunc = (a, b) => a - b;
const mulFunc = (a, b) => a * b;
const divFunc = (a, b) => a / b;

const sumResult = sumFunc(70, 30);
const subResult = subFunc(70, 30);
const mulResult = mulFunc(70, 30);
const divResult = divFunc(70, 30);

const output = {
  'output of sumFunc': sumResult,
  'output of subFunc': subResult,
  'output of mulFunc': mulResult,
  'output of divFunc': divResult,
};
console.log(output);

//arrow function
const arrowFunc = (a, b) => {
    return a + b;
};
console.log('output of arrowFunc: '+ arrowFunc(9,9));

//concise form of arrow function (suitable when have single parameter)
const arrowFunc2 = x => x * x;
console.log('output of arrowFunc2: '+ arrowFunc2(7));

//object with properties
const obj_learnathon = {
    learnathon_course: 'javascript',
    learnathon_duration: '3 months',
    learnathon_by: 'Vivasoft'
};

const clone = {
    ...obj_learnathon,
    learnathon_group: 'group-5'
};
console.log(clone);

//object destructuring to access specific properties
const {learnathon_course, learnathon_duration, learnathon_by} = clone;
console.log(learnathon_course + ' course of ' + learnathon_duration + ' by ' + learnathon_by);

//map function
const mapFunc = [1, 2, 3, 4, 5];
mapFunc.map(value => {
  return console.log(`<li>${value}</li>`);
});

//this keyword
const thisLearnathon = {
    learnathon_course: 'javascript',
    learnathon_duration: '3 months',
    learnathon_by: 'Vivasoft',

    learnathon_details (){
        console.log('The details of learnathon: ', this);
    }
};
thisLearnathon.learnathon_details();

//class in javascript
class Learnathon {
    constructor(learnathon_course, learnathon_duration, learnathon_by){
        this.learnathon_course = learnathon_course;
        this.learnathon_duration = learnathon_duration;
        this.learnathon_by = learnathon_by;
    }

    learnathon_classDetails (){
        console.log('The details of learnathon: ', this);
    }
}

const instanceLearnathon = new Learnathon('react', '3 months', 'Vivasoft');
instanceLearnathon.learnathon_classDetails();

//class in javascript with initialize values directly
class Learnathon2 {
    constructor(){
        this.learnathon_course = 'react';
        this.learnathon_duration = '3 months';
        this.learnathon_by = 'Vivasoft';
    }

    _learnathon_classDetails (){
        console.log('The details of learnathon: ', this);
    }
}

const instanceLearnathon2 = new Learnathon2();
instanceLearnathon2._learnathon_classDetails();