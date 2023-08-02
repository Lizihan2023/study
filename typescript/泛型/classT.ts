class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add(1, 2)

let myIdentity1: number = 0 // number 

let num: (arg: number) => number; // function 类型 // 声明
let num1: (arg: number) => number;// function number 类型 // 声明

let fun = function (arg: number): number {
    return arg
}

let fun1 = (arg: number): number => arg

num = fun // 赋值
num1 = fun1
num(2) // 2
num1(2) // 2

// 赋值
num = (arg: number) => {
    return arg
}

class Demo {
    x: number
}
class Demo1 {
    y: number
    constructor(y: number) {
        this.y = y
    }
}

let myIdentity2: (arg: Demo1) => Demo1 
    = <Demo1>(n: Demo1) => n  //myIdentity2 = <Demo1>(n: Demo1) => n

let myIdentity3: (arg: Demo) => Demo;
myIdentity3 = <Demo>(n: Demo) => n

const demo1 = myIdentity2(new Demo1(1))
console.log('demo1', demo1)  // {y:1}


let a: () => void


a = () => {
    // 不考虑方法体
}// function 类型的值

a() // 方法的执行
// myIdentity2(2)

function identity1<T>(arg: T): T {
    return arg;
}


let b = () => {
    return 0
}
let identity2: () => number = () => {
    return 0
}
// number = 2
let myIdentity: number = 2
// : <T>(arg: T) => T
// :number

let c: (x: number) => (y: number) => (b: number) => string = (c: number) => {
    return (c: number) => {
        return (a: number) => {
            return '1111'
        }
    }
}