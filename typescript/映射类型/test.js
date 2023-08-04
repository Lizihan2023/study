"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var p = new Person(); //{name:'zhangsan',age:12}
p.name = 'zhangsan';
p.age = 12;
console.log(p);
