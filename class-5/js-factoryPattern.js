//The Factory Pattern is a creational design pattern used in software development.
//It provides a way to create objects without specifying the exact class of object that will be created.
//Instead, it delegates the responsibility of instantiating objects to its subclasses or specific methods.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class CarFactory {
  static createCar(make, model, year) {
    return new Car(make, model, year);
  }
}

const car1 = CarFactory.createCar("Toyota", "Camry", 2022);
const car2 = CarFactory.createCar("Honda", "Civic", 2023);

console.log(car1.getInfo());
console.log(car2.getInfo());

// output:
// [Running] node "c:\Users\ahmed\Downloads\404RequestedUserNotFound\learnathon-2-javascript\class-5\js-factoryClass.js"
// 2022 Toyota Camry
// 2023 Honda Civic
