"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notSure = void 0;
// export let notSure:any = 4
// notSure = "maybe a srting instead"
// console.log(notSure);
// notSure = false
// console.log(notSure);
exports.notSure = 4;
exports.notSure.ifItExists();
exports.notSure.toFixed();
// let prettySure: object = 4
// prettySure.toFixed()
// object 允许赋予任何值，但不能在上面调用任何方法，即使它真的有这些方法
// any 允许在编译时可选择的包含或移除类型检查
var list = [1, 'red', true];
list[1] = 100;
console.log(list);
