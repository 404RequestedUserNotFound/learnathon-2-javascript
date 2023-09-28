//-------------------------------------------Promises-----------------------------------------------------//
//A promise is an object that may produce a single value some time in the future.
//A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation completed successfully.
//rejected: meaning that the operation failed.
const fetchedData = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(fetchedData); // will print the promise object

//here executor receives two callback functions; resolve and reject
const getJob = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    const successMsg = "Congratulations you got the job :D";
    resolve(successMsg);
  } else {
    const errorMsg = "Sorry you are not selected :(";
    reject(errorMsg);
  }
});

getJob
  .then((successMsg) => {
    console.log("Data:", successMsg);
  })
  .catch((errorMsg) => {
    console.error("Error:", errorMsg);
  });

//   [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// Data: Congratulations you got the job :D

// [Done] exited with code=0 in 0.612 seconds

// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// Error: Sorry you are not selected :(

// [Done] exited with code=0 in 0.501 seconds

const examPromise = new Promise((resolve, reject) => {
  const mark = Math.ceil(Math.random() * 100);

  console.log(`You have scored ${mark}`);
  if (mark >= 33) {
    // const passMsg = "Congratulations! You have passed the exam.";
    resolve("Congratulations! You have passed the exam.");
  } else {
    const failMsg = "Sorry! You have failed the exam.";
    reject(failMsg);
  }
});
examPromise

  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(message);
  });
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// You have scored 68
// Congratulations! You have passed the exam.

// [Done] exited with code=0 in 0.12 seconds

//Chain promises
const resultPromise = new Promise((resolve, reject) => {
  const mark = Math.ceil(Math.random() * 100);

  console.log(`You have scored ${mark}`);
  if (mark < 40) {
    reject("Sorry! You have failed the exam.");
  } else if (mark <= 60) {
    resolve(
      "Congratulations! You have passed the exam, but you need to retake the course."
    );
  } else {
    resolve("Congratulations! You have passed the exam.");
  }
});

resultPromise
  .then((message) => {
    console.log(message);
    return "Thank you!";
  })
  .then((additionalMessage) => {
    console.log(additionalMessage);
  })
  .catch((message) => {
    console.error(message);
  });
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// You have scored 77
// Congratulations! You have passed the exam.
// Thank you!

//--------------------------------------------------------------------------Promise.all------------------------------------------------------------------------
//recieves an array of promises and returns a single promise
//When all promises resolve then it will return to the then block otherwise it will return to the catch block
const planetEarth = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet earth"), 3000)
);
const planetMoon = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet moon"), 1000)
);
const planetMars = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet mars"), 2000)
);

Promise.all([planetEarth, planetMoon, planetMars])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

//Output:
// [
//   'i am from planet earth',
//   'i am from planet moon',
//   'i am from planet mars'
// ]
//--------------------------------------------------------------------------Promise.all End------------------------------------------------------------------------

//--------------------------------------------------------------------------Promise.any------------------------------------------------------------------------
//Promise.any
//When any of the promises resolves it will return to the then block otherwise it will return to the catch block
const planetVenus = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet venus"), 1500)
);
const planetMercury = new Promise((resolve, reject) =>
  setTimeout(() => reject("i am from planet mercury"), 2500)
);
const planetJupiter = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet jupiter"), 2000)
);

Promise.any([planetVenus, planetMercury, planetJupiter])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// output:
// i am from planet venus
//--------------------------------------------------------------------------Promise.any End------------------------------------------------------------------------

//--------------------------------------------------------------------------Promise.allSettled------------------------------------------------------------------------
//When all promises resolve or reject it will return to the then block
const planetSaturn = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet saturn"), 1700)
);
const planetUranus = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet uranus"), 2200)
);
const planetNeptune = new Promise((resolve, reject) =>
  setTimeout(() => reject("i am from planet neptune"), 2800)
);

Promise.allSettled([planetSaturn, planetUranus, planetNeptune]).then(
  (results) => {
    console.log(results);
  }
);
// output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-4\tempCodeRunnerFile.js"
// [
//   { status: 'fulfilled', value: 'i am from planet saturn' },
//   { status: 'fulfilled', value: 'i am from planet uranus' },
//   { status: 'rejected', reason: 'i am from planet neptune' }
// ]
//--------------------------------------------------------------------------Promise.allSettled End------------------------------------------------------------------------

//--------------------------------------------------------------------------Promise.race------------------------------------------------------------------------
//When any of the promises resolves or rejects first it will return to the then block
const planetPluto = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet pluto"), 3000)
);
const planetEris = new Promise((resolve) =>
  setTimeout(() => resolve("i am from planet eris"), 4000)
);

Promise.race([planetPluto, planetEris])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// output:
// i am from planet pluto

//--------------------------------------------------------------------------Promise.race End------------------------------------------------------------------------
