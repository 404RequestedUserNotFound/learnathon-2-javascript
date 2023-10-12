//What is this keyword?
//In JavaScript, this is a special keyword that refers to the context in which a function is executed.

let learnathon = {
    name: "Learn-A-Thon 2.0",
    duration: "3 months",
    topics: ["JS", "React"],

    detailsLearnathon() {
        console.log(`Welcome to ${this.name}, which is of ${this.duration} and topics are ${this.topics}`);
    }
};
learnathon.detailsLearnathon();
// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\js-this.js"
// Welcome to Learn-A-Thon 2.0, which is of 3 months and topics are JS,React

//What is Global this?
//In global execution context, this refers to global object. In a browser, it refers to window object.
console.log(this);
// Output:
// {}