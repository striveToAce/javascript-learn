/*
The Factory pattern provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

Use Cases: When dealing with complex object creation or when the creation process needs to be abstracted.
*/

class Car {
    constructor(model) {
        this.model = model;
    }
}

class Bike {
    constructor(model) {
        this.model = model;
    }
}

class VehicleFactory {
    static createVehicle(type, model) {
        switch (type) {
            case "car":
                return new Car(model);
            case "bike":
                return new Bike(model);
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

// Usage
const car = VehicleFactory.createVehicle("car", "Toyota");
const bike = VehicleFactory.createVehicle("bike", "Yamaha");

console.log(car instanceof Car); // Output: true
console.log(bike instanceof Bike); // Output: true
