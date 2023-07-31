"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = exports.yourName = void 0;
exports.yourName = 'bob';
exports.yourName = 'smith';
console.log(exports.yourName);
// 模板字符串
exports.myName = 'jim';
var age = 18;
var info = "Hello, my name is ".concat(exports.myName, ". i'm ").concat(age, " years old");
console.log(info);
