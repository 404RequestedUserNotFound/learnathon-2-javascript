//!---------------------------------------SYSNTAX ERROR---------------------------------------
// let a = 7;
// let b = 9;

// if (a > b) {
//     console.log("a is greater");
// } else 
//     console.log("b is greater");
// }
//!--------------------------------------SYNTAX ERROR END---------------------------------

//!--------------------------------------REFERENCE ERROR----------------------------------
// console.log(nameOfStudent);
//Uncaught ReferenceError: nameOfStudent is not defined

// function testError(){
//     'use strict';
//     error = "Test Error";
// }
// testError();
//Output:
//error-handling.js:17  Uncaught ReferenceError: error is not defined
// at testError (error-handling.js:17:11)
// at error-handling.js:19:1
//!-------------------------------------REFERENCE ERROR END-------------------------------

//!--------------------------------------TYPE ERROR---------------------------------------
// let splitString = "Hello planet earth";
// console.log(splitString.split(' '));

// let splitNumber = 1234;
// console.log(splitNumber.split(' '));
//Output:
// Uncaught TypeError: splitNumber.split is not a function
//!-------------------------------------TYPE ERROR END-------------------------------------

//!--------------------------------------RANGE ERROR---------------------------------------
// let rangeArray = new Array(-8);
// console.log(rangeArray);
//Output:
// Uncaught RangeError: Invalid array length

// const today = new Date('1999-17-98').toISOString();
//Output:
// error-handling.js:43  Uncaught RangeError: Invalid time value
//     at Date.toISOString (<anonymous>)
//     at
//!-------------------------------------RANGE ERROR END-------------------------------------

//!--------------------------------------URI ERROR------------------------------------------

// const encodedURI = encodeURI('\uD800');
//Output:
// error-handling.js:52  Uncaught URIError: URI malformed
//     at encodeURI (<anonymous>)
//     at
//!-------------------------------------INETERNAL ERROR END---------------------------------
// function crack(){
//     crack();
// }
// crack();
//!-------------------------------------INETERNAL ERROR END---------------------------------

//!-------------------------------------TRY CATCH-------------------------------------------
// try{
//     //const errorName = "Hi dear, I am an error";
//     console.log(errorName);
// }catch(error){
//     console.log(error);
// }finally{
//     console.log("HA HA HA");
// }
// Output:
// ReferenceError: errorName is not defined
//     at error-handling.js:67:17
// error-handling.js:71 HA HA HA
//!-------------------------------------TRY CATCH END---------------------------------------
// class CustomError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "CustomError";
//     }
// }

// function testCustomError(i,j){
//     if (j == 0){
//         throw new CustomError("not allowed");
//     }
//     return (i/j);
// }
// testCustomError(50,0);
// //Output:
// error-handling.js:87  Uncaught CustomError: not allowed
//     at testCustomError (error-handling.js:87:15)
//     at error-handling.js:91:1
//!-------------------------------------CUSTOM ERROR END-------------------------------------

//!-------------------------------------MEMORY LEAK------------------------------------------

// const magazine = [];

// function loadMagazine() {
//     magazine.length = 0;
//     for (let i = 0; i < 100; i++) {
//         magazine.push("bullet");
//     }
//     console.log('Magazine loaded ' + magazine.length + ' bullets');
// }

// document.getElementById('addBullet').addEventListener('click', loadMagazine);
//!-------------------------------------MEMORY LEAK END---------------------------------------