//What is private property and method?
//Private properties and methods are those that are not accessible outside of the object.

function Learnathon(name, duration, topics) {
    let _name = name;
    let _duration = duration;
    let _topics = topics;
    function introLearnathon() {
        console.log(`Welcome to ${_name}, which is of ${_duration} and topics are ${_topics}`);
    }

    this.introduce = function () {
        introLearnathon();
    };
}

let learnathon = new Learnathon("Learn-A-Thon 2.0", "3 months", "JS");
learnathon.introduce();
// // Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-6\js-privateProperty&Method.js"
// Welcome to Learn-A-Thon 2.0, which is of 3 months and topics are JS