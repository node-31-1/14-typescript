class Dog {
    public name: string;
    public breed: string;
    public birthYear: number;

    constructor(name: string, breed: string, birthYear: number) {
        this.name = name;
        this.breed = breed;
        this.birthYear = birthYear;
    }

    bark() {
        console.log(this.name);
        console.log("Guau guau");
    }
}

const dog1 = new Dog("Coco", "Chiguagua", 2022);
const dog2 = new Dog("Mostaza", "Pomeranio", 2022);
console.log(dog1.name);
console.log(dog2.name);
// dog1.bark();


class Car {
    public brand: string = "Toyota";
    public model: string = "4Runner";
    public velocity: number = 10;

    acelerate(increment: number) {
        this.velocity += increment;
        console.log(`La nueva velocidad es ${this.velocity}`);
    }
}

// const car1 = new Car();
// car1.brand;
// car1.acelerate(5);
