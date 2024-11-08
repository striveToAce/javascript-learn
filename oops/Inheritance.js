/*
>>Inheritance: A way to create a new class that is based on an existing class, inheriting its properties and methods.
>>Use the extends keyword to create a subclass.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Bird extends Animal{
    makeSound(){
        console.log(`${this.name} chirps.`);
    }
}

/*
Polymorphism: The ability to call the same method on different objects and have each of them respond in their own way.
Achieved through method overriding and method overloading.
*/
const dog = new Dog("Buddy");
const bird = new Bird("Tweety");
dog.makeSound();
bird.makeSound();
