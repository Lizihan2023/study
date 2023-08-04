var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
    };
    return BasicCalculator;
}());
// 实例= new 类()
var v = new BasicCalculator(2); //{value:2}
var v1 = new BasicCalculator(10);
var c = v.add(1);
var d = c.add(2);
var x = v.add(1).add(2).add(3);
console.log('x', x);
console.log('v', v);
console.log('d', d);
var b = v.multiply(1); // undefined
console.log(b);
// v.multiply(5)
// v1.multiply(5) //{value:50}
// v1.add(1) //{value:51}
// console.log('v', v)//{value:10}
// 链式调用
// .multiply(5)
// .add(1)
// .currentValue();
// console.log(v);
