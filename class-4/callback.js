//--------------------------------------------Callback Function--------------------------------------------
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function showMsg(callback) {
  setTimeout(function () {
    console.log("i am from showMsg function");
    callback();
  }, 2000);
}
// showMsg();

function callBackFunc() {
  console.log("i am from callback function");
}

showMsg(callBackFunc);

// output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// i am from showMsg function
// i am from callback function

// [Done] exited with code=0 in 2.119 seconds

//--------------------------------------------Callback Function End--------------------------------------------

//--------------------------------------------Callback hell/Pyramid of doom--------------------------------------------
function earthFunc(callback) {
  setTimeout(function () {
    console.log("i am from earth function");
    callback();
  }, 2000);
}

function marsFunc(callback) {
  setTimeout(function () {
    console.log("i am from mars function");
    callback();
  }, 2000);
}

function plutoFunc(callback) {
  setTimeout(function () {
    console.log("i am from pluto function");
    callback();
  }, 2000);
}

earthFunc(function () {
  marsFunc(function () {
    plutoFunc(function () {});
  });
});
//--------------------------------------------Callback hell End--------------------------------------------
