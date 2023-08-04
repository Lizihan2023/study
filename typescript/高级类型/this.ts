class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number) {
        this.value *= operand;
    }
    // ... other operations go here ...
}
// 实例= new 类()
let v = new BasicCalculator(2) //{value:2}
let v1 = new BasicCalculator(10)

let c = v.add(1)
let d = c.add(2)

let x = v.add(1).add(2).add(3)

console.log('x', x)
console.log('v', v)
console.log('d', d)

let b = v.multiply(1) // undefined

console.log(b)

// v.multiply(5)
// v1.multiply(5) //{value:50}
// v1.add(1) //{value:51}
// console.log('v', v)//{value:10}

// 链式调用
// .multiply(5)
// .add(1)
// .currentValue();

// console.log(v);
