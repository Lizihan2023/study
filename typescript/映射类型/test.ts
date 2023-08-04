export class Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    run() {

    }
}

type Readonly<V> = {
    readonly [K in keyof V]: V[K] // property // key
}
type Partial<T> = {
    [P in keyof T]?: T[P]
}

type PersonPartial = Partial<Person>
type ReadonlyPerson = Readonly<Person>

const p = new Person('zhangsan', 12) //{name:'zhangsan',age:12}
// p.name = 'zhangsan' // 可写
// p.age = 12
console.log(p)
p.run() // 读执行

const p1: ReadonlyPerson = new Person('lisi', 12)
console.log(p1.name) // 可读 

const p2: PersonPartial = new Person('wangwu', 12)
p2.age = 11
// p2['dddd']


