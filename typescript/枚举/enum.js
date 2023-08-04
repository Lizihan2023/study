"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var Response;
(function (Response) {
    Response[Response["Yes"] = 1] = "Yes";
    Response[Response["No"] = 0] = "No";
})(Response || (exports.Response = Response = {}));
function respond(recipient, message) {
}
console.log(respond("princess", Response.Yes));
// 初值为计算值
var getValue = function () {
    return 0;
};
var ErrorIndex;
(function (ErrorIndex) {
    ErrorIndex[ErrorIndex["a"] = getValue()] = "a";
    ErrorIndex[ErrorIndex["b"] = 1] = "b";
    ErrorIndex[ErrorIndex["c"] = 2] = "c";
})(ErrorIndex || (ErrorIndex = {}));
var RightIndex;
(function (RightIndex) {
    RightIndex[RightIndex["a"] = getValue()] = "a";
    RightIndex[RightIndex["b"] = 1] = "b";
    RightIndex[RightIndex["c"] = 2] = "c";
})(RightIndex || (RightIndex = {}));
// 初值为常量
var Start = 1;
var Index;
(function (Index) {
    Index[Index["a"] = 1] = "a";
    Index[Index["b"] = 2] = "b";
    Index[Index["c"] = 3] = "c";
})(Index || (Index = {}));
// enum Status {
//     Off,
//     On
// }
// const enum Animal {
//     Dog,
//     Cat
// }
// console.log(Status.Off);
// console.log(Animal.Cat);
// 常量枚举
var Animal;
(function (Animal) {
    Animal[Animal["dog"] = 1] = "dog";
    Animal[Animal["cat"] = -1] = "cat";
    Animal[Animal["fish"] = 0] = "fish";
    Animal[Animal["element"] = 1] = "element";
})(Animal || (Animal = {}));
console.log(Animal);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 5] = "Read";
    FileAccess[FileAccess["Write"] = 7] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 12] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
