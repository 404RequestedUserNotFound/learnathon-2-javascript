//this keyword is a special keyword that refers to the current execution context or the current object within which it is used.
const learnathon = {
  course_name: "javascript",
  course_duration: "3 months",
  learnathon_details: function () {
    console.log("Course name: " + this.course_name);
    console.log("Course duration: " + this.course_duration);
  },
};
learnathon.learnathon_details();

const _learnathon = {
  course_name: "react",
  course_duration: "3 months",
  _learnathon_details: function () {
    console.log(`It's a ${this.course_duration} course on ${this.course_name}`);
  },
};
_learnathon._learnathon_details();
