//To create a class inheritance, use the extends keyword.
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  studentMethod() {
    console.log(`I am ${this.name} and I am ${this.age} years old.`);
  }
}

class GraduateStudent extends Student {
  constructor(name, age, thesisTopic) {
    super(name, age);
    this.thesisTopic = thesisTopic;
  }

  graduateMethod() {
    console.log(
      `${this.name} is presenting their thesis on ${this.thesisTopic}.`
    );
  }
}

const Ahsan = new Student("Ahsan", 20);
const Ahmed = new GraduateStudent("Ahmed", 25, "ResNet");

Ahsan.studentMethod();
Ahmed.graduateMethod();

// output:
// I am Ahsan and I am 20 years old.
// Ahmed is presenting their thesis on ResNet.
