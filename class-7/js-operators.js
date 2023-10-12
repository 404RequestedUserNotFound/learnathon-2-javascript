//Logical Operators in JavaScript
// && - AND operator - Both sides need to be true
// || - OR operator - One side needs to be true
// ! - NOT operator - Converts true to false and vice versa
//== - Equality - Compares two values and returns true if they're equivalent
//=== - Strict Equality - Compares two values and returns true if they're equivalent and of the same type
//!= - Not Equal - Compares two values and returns true if they're not equivalent
//!== - Strict Not Equal - Compares two values and returns true if they're not equivalent and/or not of the same type
//> - Greater than - Checks if the value on the left is greater than the value on the right
//< - Less than - Checks if the value on the left is less than the value on the right
//>= - Greater than or equal to - Checks if the value on the left is greater than or equal to the value on the right
//<= - Less than or equal to - Checks if the value on the left is less than or equal to the value on the right

//------------------------AND OPERATOR------------------------
const age = 18;
const paidTicketPrice = false;

function canAttendConcert(age, paidTicketPrice) {
  if (age >= 18 && paidTicketPrice) {
    console.log("You can attend the concert");
  } else {
    console.log("You cannot attend the concert");
  }
}

canAttendConcert(age, paidTicketPrice);

// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// You cannot attend the concert
//------------------------AND OPERATOR END------------------------

//------------------------OR OPERATOR------------------------
const cardPunched = false;
const haveToken = false;

function canHaveLunch(cardPunched, haveToken) {
  if (cardPunched || haveToken) {
    console.log("You can have lunch");
  } else {
    console.log("You cannot have lunch");
  }
}
canHaveLunch(cardPunched, haveToken);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// You cannot have lunch
//------------------------OR OPERATOR END------------------------

//------------------------NOT OPERATOR------------------------
const isStudent = true;

function canEnterUni(isStudent) {
  if (!isStudent) {
    console.log("You cannot enter.");
  } else {
    console.log("You can go.");
  }
}
canEnterUni(isStudent);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// You can go.
//------------------------NOT OPERATOR END------------------------

//------------------------EQUALITY OPERATOR------------------------

const personName1 = "Ahmed";
const personName2 = "Ahmed";

function areNamesEqual(personName1, personName2) {
  if (personName1 == personName2) {
    console.log("Names are equal");
  } else {
    console.log("Names are not equal");
  }
}
areNamesEqual(personName1, personName2);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// Names are equal
//------------------------EQUALITY OPERATOR END------------------------

//------------------------STRICT EQUALITY OPERATOR------------------------
function tripleEqual(a, b) {
  return a === b;
}

const intType = 33;
const stringType = "22";

const result = tripleEqual(intType, stringType);

console.log(result);

//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// false
//------------------------STRICT EQUALITY OPERATOR END------------------------

//------------------------NOT EQUALITY OPERATOR------------------------
const haveMoney = false;
const haveBit = false;

function canBuyMac(haveMoney, haveBit) {
  if (haveMoney != haveBit) {
    console.log("i can buy mac");
  } else {
    console.log("i can buy mac in my dreams");
  }
}
canBuyMac(haveMoney, haveBit);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// i can buy mac in my dreams
//------------------------NOT EQUALITY OPERATOR END------------------------

//------------------------STRICT NOT EQUALITY OPERATOR------------------------
const valueOne = 10;
const valieTwo = 10;

const checkValue = valueOne !== valieTwo;

console.log(checkValue);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// false
//------------------------STRICT NOT EQUALITY OPERATOR END------------------------

//------------------------GREATER THAN OPERATOR------------------------
const approvedAge = 18;
const myAge = 17;

function canHaveNID(approvedAge, myAge) {
  if (myAge > approvedAge) {
    console.log("i can have NID");
  } else {
    console.log("i cannot have NID");
  }
}
canHaveNID(approvedAge, myAge);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// i cannot have NID
//------------------------GREATER THAN OPERATOR END------------------------

//------------------------LESS THAN OPERATOR------------------------
const approvedAge = 18;
const myAge = 17;

function canHaveNID(approvedAge, myAge) {
  if (myAge < approvedAge) {
    console.log("i can have NID");
  } else {
    console.log("i cannot have NID");
  }
}
canHaveNID(approvedAge, myAge);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// i can have NID
//------------------------LESS THAN OPERATOR END------------------------

//------------------------GREATER THAN OR EQUAL TO OPERATOR------------------------
const altitudeForJump = 40000;
const myAltitude = 22000;

function canJump(altitudeForJump, myAltitude) {
  if (myAltitude >= altitudeForJump) {
    console.log("i can jump");
  } else {
    console.log("i cannot jump");
  }
}
canJump(altitudeForJump, myAltitude);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// i cannot jump
//------------------------GREATER THAN OR EQUAL TO OPERATOR END------------------------

//------------------------LESS THAN OR EQUAL TO OPERATOR------------------------
const altitudeForJump = 40000;
const myAltitude = 40000;

function canJump(altitudeForJump, myAltitude) {
  if (myAltitude <= altitudeForJump) {
    console.log("i can jump");
  } else {
    console.log("i cannot jump");
  }
}
canJump(altitudeForJump, myAltitude);
//Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// i can jump
//------------------------LESS THAN OR EQUAL TO OPERATOR END------------------------
