var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (val) {
            this.name = val.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person('nihao');
console.log(p1.getName);
p1.setName = 'hello';
console.log(p1.name);
