//What is Abstraction?
//Abstraction is the concept of object-oriented programming that "shows" only essential attributes and "hides" unnecessary information.
//Abstraction can be achieved by using abstract classes and interfaces.
//An abstract class is a class that is declared abstract—it may or may not include abstract methods.

class SolarSystem {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Earth extends SolarSystem {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  getInfo() {
    return `${this.getName()} is a ${this.type} planet.`;
  }
}

class Moon extends SolarSystem {
  constructor(name, planet) {
    super(name);
    this.planet = planet;
  }

  getInfo() {
    return `${this.getName()} orbits around ${this.planet.getName()}.`;
  }
}

class Mars extends SolarSystem {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  getInfo() {
    return `${this.getName()} is the ${this.type} star.`;
  }
}

//instances of classes
const earth = new Earth("Earth", "terrestrial");
const moon = new Moon("Moon", earth);
const mars = new Mars("Mars", "place of Elon Musk");

//Use of abstraction
console.log(earth.getInfo());
console.log(moon.getInfo());
console.log(mars.getInfo());

// Output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-5\js-abstraction.js"
// Earth is a terrestrial planet.
// Moon orbits around Earth.
// Mars is the place of Elon Musk star.
