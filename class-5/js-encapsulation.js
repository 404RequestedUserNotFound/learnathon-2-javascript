//Encapsulation is a concept in object-oriented programming that refers to the practice of bundling data and methods that operate on that data within a single unit, such as a class.
//This is done to prevent direct access to the data, hiding implementation details from the user.

function Earth(name, gravity) {
  //private variable
  let _gravity = gravity;

  //public variable
  let _name = name;

  this.getName = function () {
    return _name;
  };
  this.getGravity = function () {
    return _gravity;
  };
}

//object of Earth class
let earth = new Earth("Earth", 9.8);
console.log(earth.getName());
console.log(earth.getGravity());

class StudentMark {
  name;
  marks = {};

  constructor(studentName) {
    this.name = studentName;
  }

  getAverageMark = () => {
    const totalMarks = Object.values(this.marks);
    if (totalMarks.length > 0) {
      const sum = totalMarks.reduce((acc, mark) => acc + mark);
      return (sum / totalMarks.length).toFixed(2);
    } else {
      return "No marks available for calculation.";
    }
  };
}

const ahmedshafin = new StudentMark();

ahmedshafin.marks = {
  Math: 85,
  Chemistry: 90,
  Biology: 75,
};

console.log(`Average Mark: ${ahmedshafin.getAverageMark()}`);
