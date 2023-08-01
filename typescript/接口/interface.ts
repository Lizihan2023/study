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
try {
    console.log(rhino);
} catch (err) {
}

let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
interface keyValue<T, U> {
    key: T,
    value: U
}

let test1: keyValue<string, number> = { key: "wsd", value: 10 }
let test2: keyValue<number, boolean> = { key: 20, value: true }
console.log(test1, test2);
// 接口使用泛型

type test = number
let count_number: test = 123
console.log(count_number);

type test4 = string | number
let str: test4 = 123
let str1: test4 = "1323"
console.log(str,str1);
// 类型别名 利用type给类型取别名

interface Itest {
    key:string
}

type test5 = Itest & {value:number}
let myTest:test5 = {key:"haha",value:1}
console.log(myTest);
// 交叉类型：把类型都组合起来，变量赋值必须满足交叉类型
