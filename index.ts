// import classes

// MyClass.ts
export class MyClass {
  constructor(private name: string) {}

  greet() {
      return `Hello, ${this.name}!`;
  }
}


// create an array of vehicles






// TODO: uncomment once trucks are implemented
export class Truck {
  constructor(private make: string, private model: string, private year: number) {}

  getDetails() {
      return `${this.year} ${this.make} ${this.model} - This is a truck.`;
  }

  // Additional methods specific to Truck can be added here
}



// TODO: uncomment once motorbikes are implemented

export class Motorbike {
  constructor(private make: string, private model: string, private year: number) {}

  getDetails() {
      return `${this.year} ${this.make} ${this.model} - This is a motorbike.`;
  }

  // Additional methods specific to Motorbike can be added here
}


  
 

// push vehicles to array
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

let vehicles: Vehicle[] = [];

let newVehicle: Vehicle = {
  make: "Toyota",
  model: "Camry",
  year: 2021
};

vehicles.push(newVehicle);

// Adding another vehicle
newVehicle = {
  make: "Honda",
  model: "Accord",
  year: 2022
};

vehicles.push(newVehicle);

console.log(vehicles);





class Cli {
    constructor(private name: string) {}

    greet() {
        console.log(`Hello, ${this.name}! Welcome to the CLI application.`);
    }
}

// Creating a new instance of the Cli class
const myCli = new Cli("User");

// Calling a method on the instance

class Calculator {
  add(a: number, b: number): number {
      return a + b;
  }

  subtract(a: number, b: number): number {
      return a - b;
  }
}



// start the cli

myCli.greet();


