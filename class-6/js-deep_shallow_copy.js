//What is Shallow Copy?
//Shallow copy is a type of copy where the values of the new object are copied but the references are not.

//What is Deep Copy?
//Deep copy is a type of copy where the values as well as the references of the new object are copied.

//-------------------------------------------SHALLOW COPY------------------------------------------------------------
let learnathon1 = {
  name: "Learn-A-Thon 1.0",
  duration: "3 months",
};
let learnathon2 = learnathon1;
learnathon2.name = "Learn-A-Thon 2.0";
console.log(learnathon1);
console.log(learnathon2);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// { name: 'Learn-A-Thon 2.0', duration: '3 months' }
// { name: 'Learn-A-Thon 2.0', duration: '3 months' }
//-------------------------------------------SHALLOW COPY END------------------------------------------------------------

//-------------------------------------------DEEP COPY------------------------------------------------------------
let learnathonByVivaSoft = {
  name: "Learn-A-Thon 1.0",
  duration: "3 months",
};

let learnathonByVivaSoft2 = JSON.parse(JSON.stringify(learnathonByVivaSoft));
learnathonByVivaSoft2.name = "Learn-A-Thon 2.0";
learnathonByVivaSoft2.duration = "6 months";
console.log(learnathonByVivaSoft);
console.log(learnathonByVivaSoft2);
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\tempCodeRunnerFile.js"
// { name: 'Learn-A-Thon 1.0', duration: '3 months' }
// { name: 'Learn-A-Thon 2.0', duration: '6 months' }
