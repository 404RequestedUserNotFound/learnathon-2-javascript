//What is class?
//Class is a template for creating objects. It encapsulates data with code to work on that data.
//The class keyword was introduced in ES6. It provides a more structured and syntactically clear way to define blueprints for creating objects.

//Planet class
class planetEarth {
  //constructor is a special method for creating and initializing an object created with a class
  //there can only be one special method with the name "constructor" in a class
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  earthFunc() {
    console.log("i am planet " + this.name + " and my type is " + this.type);
  }
}

let earth = new planetEarth("Earth", "terrestrial");
earth.earthFunc();

//access the properties of the earth object
//can be accessed using dot notation
console.log(earth.name);
console.log(earth.type);

//can be accessed using bracket notation
console.log(earth["name"]);
console.log(earth["type"]);

//can be accessed by calling the method
earth.earthFunc();

//-------------------------------------------------SUPER CLASS-------------------------------------------------------
//Mars Class
class planetMars extends planetEarth {
  constructor(name, type, gravity) {
    //super keyword is used to access the constructor of the parent class
    super(name, type);
    this.gravity = gravity;
  }

  marsFunc() {
    console.log(
      "i am planet " +
        this.name +
        " and my type is " +
        this.type +
        " and my gravity is " +
        this.gravity
    );
  }
}

let mars = new planetMars("Mars", "terrestrial", 9.8);
mars.marsFunc();
//-------------------------------------------------SUPER CLASS END-------------------------------------------------------
