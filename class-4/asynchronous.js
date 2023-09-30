//------------------------------------------Asynchronous Javascript------------------------------------------//
//Functions running in parallel with other functions are called asynchronous functions.
//Asynchronous operations allow certain tasks to execute without blocking the program from running.
console.log("i am from console log");
console.log("i am also from console log");

// setTimeout is a asynchronous function
setTimeout(() => {
  console.log(
    "i am from settimeout asynchronus function and i will run after 5 seconds"
  );
  console.log(
    "i am also from settimeout asynchronus function and i will run after 5 seconds"
  );
}, 5000); //will go to callback queue after 5 seconds from the Web API

setTimeout(() => {
  console.log(
    "i am from settimeout asynchronus function and i will run after 3 seconds"
  );
  console.log(
    "i am also from settimeout asynchronus function and i will run after 3 seconds"
  );
}, 3000); //will go to callback queue after 3 seconds from the Web API

//   [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\script.js"
//   i am from console log
//   i am also from console log
//   i am from settimeout asynchronus function and i will run after 3 seconds
//   i am also from settimeout asynchronus function and i will run after 3 seconds
//   i am from settimeout asynchronus function and i will run after 5 seconds
//   i am also from settimeout asynchronus function and i will run after 5 secondssss

//   [Done] exited with code=0 in 5.538 seconds

//What is event loop?
//Event loop is a mechanism which handles the asynchronous oparations without blocking other execution of code. Event loop is a continuous process which runs in the background and keeps on checking the call stack and callback queue.
//If the call stack is empty then it will check the callback queue and if there is any callback function in the callback queue then it will push the callback function to the call stack and execute it.
