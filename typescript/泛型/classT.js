var c = function (c) { return function (b) { return function (a) { return a * b * c; }; }; };
var d = c('1')(2)(3); // d '1111'
console.log('d', d);
