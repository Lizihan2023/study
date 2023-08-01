// class Animal {
//    private name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// export class Main{

// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

export class Animal {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Rhino extends Animal {
    constructor(name: string) {
        super(name)
    }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino('Rhino');
try{
    console.log(rhino);
}catch(err){
}

let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.