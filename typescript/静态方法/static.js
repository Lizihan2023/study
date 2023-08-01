var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.getClassName = function () {
        return Father.className;
    };
    Father.className = 'Father';
    return Father;
}());
console.log(Father.className);
console.log(Father.getClassName());
// 使用static修饰符修饰的方法称为静态方法，他们不需要被实例化，而是直接通过类来调用
