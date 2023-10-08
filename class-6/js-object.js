//What is Obect?
//Object is a collection of properties.

//What is Object Creation?
//Object creation refers to the process of creating a new instance of an object.

//What is Object Literal?
//Object literal is a list of value pairs inside curly braces {}.

//What is Object Cloning?
//Object cloning refers to the process of creating an exact copy of an object.

//What is Object deletion?
//Object deletion refers to the process of deleting an existing object from the database.

//What is Object Destructuring?
//Object destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


//-------------------------------------------OBJECT LITERAL NOTATION------------------------------------------------------------

const learnathon = {
  name: "Learn-A-Thon 2.0",
  duration: "3 months",
  topics: ["JS", "React"],
  isRecommended: true,
};
console.log(learnathon);

//-------------------------------------------OBJECT LITERAL NOTATION END------------------------------------------------------------

//-------------------------------------------OBJECT CLONING------------------------------------------------------------
const learnathon2 = Object.assign({}, learnathon);
console.log("i am from clone", learnathon2);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\object.js"
// {
//   name: 'Learn-A-Thon 2.0',
//   duration: '3 months',
//   topics: [ 'JS', 'React' ],
//   isRecommended: true
// }
// i am from clone {
//   name: 'Learn-A-Thon 2.0',
//   duration: '3 months',
//   topics: [ 'JS', 'React' ],
//   isRecommended: true
// }
//-------------------------------------------OBJECT CLONING END------------------------------------------------------------

//-------------------------------------------OBJECT DELETION------------------------------------------------------------
delete learnathon.isRecommended;
console.log("i am from delete ", learnathon);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\object.js"
// {
//   name: 'Learn-A-Thon 2.0',
//   duration: '3 months',
//   topics: [ 'JS', 'React' ],
//   isRecommended: true
// }
// i am from clone {
//   name: 'Learn-A-Thon 2.0',
//   duration: '3 months',
//   topics: [ 'JS', 'React' ],
//   isRecommended: true
// }
// i am from delete  {
//   name: 'Learn-A-Thon 2.0',
//   duration: '3 months',
//   topics: [ 'JS', 'React' ]
//-------------------------------------------OBJECT DELETION END------------------------------------------------------------

//-------------------------------------------OBJECT DESTRUCTURING------------------------------------------------------------
const { name, duration, topics } = learnathon;
console.log(name);
console.log(duration);
console.log(topics);
// Output:
// Learn-A-Thon 2.0
// 3 months
// [ 'JS', 'React' ]
//-------------------------------------------OBJECT DESTRUCTURING END------------------------------------------------------------

