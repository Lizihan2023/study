class Person {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    get getName() {
        return this.name
    }
    set setName(val: string) {
        this.name = val.toUpperCase()
    }
}
let p1 = new Person('nihao')
console.log(p1.getName);
p1.setName = 'hello'
console.log(p1.name);

