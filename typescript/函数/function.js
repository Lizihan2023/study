"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
function add(x, y) {
    return x + y;
}
console.log(add(2, 5));
function person(firstName, lastName) {
    return firstName + '' + lastName;
}
exports.person = person;
console.log(person("bob"));
console.log(person("bob", "jim"));
console.log((person("bob", "jim", "tom")));
// 可选参数和默认参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(":");
}
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// console.log(buildNameFun("bob", "asd","sad"));
console.log(buildName("bob", "jim", "kate"));
