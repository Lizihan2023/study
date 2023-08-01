class Father {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    public static className: string = 'Father'
    static getClassName(): string {
        return Father.className
    }

}
console.log(Father.className)
console.log(Father.getClassName())
// 使用static修饰符修饰的方法称为静态方法，他们不需要被实例化，而是直接通过类来调用