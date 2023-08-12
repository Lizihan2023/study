// 扩展运算符(spread)是三个点(...). 它好比rest参数的逆运算，将一个数组转换为用逗号分隔的参数序列
console.log(...[1,2,3])
// 1 2 3
console.log(1,...[2,3,4],5)
// 1 2 3 4 5

// [...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

/* 只有当函数调用时扩展运算符才可以放在圆括号中，否则会报错*/
//(...[1, 2])
// Uncaught SyntaxError: Unexpected number
//console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number
//console.log(...[1, 2])
// 1 2

// 替代函数的apply方法
//由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转换为函数的参数了
// ES5 的写法
//function f(x,y,z) {
	// ...
//}

//let args = [0,1,2]
//f.apply(null, args)
//ES6 的写法
//function f(x,y,z) {
	// ...
//}
//let args = [0,1,2]
//f(...args)


// 扩展运算符内部调用的是数据结构的iterator接口，因此只要有iterator接口的对象都可以应用扩展运算符
// 比如Map结构
let map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
])

let arr = [...map.values()]

console.log(arr)

// 如果对没有iterator接口的对象使用扩展运算符，将会报错
