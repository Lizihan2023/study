"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = void 0;
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 4] = "blue";
})(color || (exports.color = color = {}));
var c = color.green;
console.log(c);
