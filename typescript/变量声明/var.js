"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = void 0;
function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
exports.f = f;
console.log(f(false, 0));
console.log(f(true, 0));
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
console.log(sumMatrix([[12]]));
var _loop_1 = function (i) {
    setTimeout(function () { return console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
