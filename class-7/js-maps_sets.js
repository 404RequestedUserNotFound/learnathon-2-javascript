//What is map in javascript?
//Map is a collection of key-value pairs where key can be of any type.

//What is set in javascript?
//Set is a collection of unique values of any type.

//--------------------MAPS--------------------
const testMap = new Map();

testMap.set("name", "Ahmed Shafin");
testMap.set("university", "American International University-Bangladesh");

console.log(testMap.has("name"));
console.log(testMap.has("cgpa"));
console.log(testMap.get("name"));
console.log(testMap.get("university"));
console.log(testMap.delete("name"));
console.log(testMap.set("name", "i am new here"));
console.log(testMap.size);

// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-7\js-maps_sets.js"
// true
// false
// Ahmed Shafin
// American International University-Bangladesh
// true
// Map(2) {
//   'university' => 'American International University-Bangladesh',
//   'name' => 'i am new here'
// }
//2
//--------------------MAPS END--------------------


