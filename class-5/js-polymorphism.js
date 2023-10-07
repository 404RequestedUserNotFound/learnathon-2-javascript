//What is Polymorphism?
//Polymorphism is an object-oriented programming concept that refers to the ability of a variable, function or object to take on multiple forms.
// A language that features polymorphism allows developers to program in the general rather than program in the specific.

class SolarSystem {
  constructor(name) {
    this.name = name;
  }
}

class Planet extends SolarSystem {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  planetFunc() {
    console.log(`${this.name} is a ${this.type} planet.`);
  }
}

class Moon extends SolarSystem {
  constructor(name, planet) {
    super(name);
    this.planet = planet;
  }
}

// Create instances
const earth = new Planet("Earth", "terrestrial");
const mars = new Planet("Mars", "terrestrial");

// Use  of polymorphism
//can call planetFunc() on both instances
earth.planetFunc();
mars.planetFunc();

// output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-5\js-polymorphism.js"
// Earth is a terrestrial planet.
// Mars is a terrestrial planet.
