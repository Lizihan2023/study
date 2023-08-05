// 1.promise是一个类 当执行这个类的时候，需要传入一个执行器进去，执行器会立即执行
// 2.promise有三种状态 分别是成功fulfilled 失败 rejected 等待 pending
//   pending -> fulfilled
//	 pending -> rejected
//   一旦状态确定就不可改变
// 3.resolve reject函数就是用来更改状态的
//	 resolve : fulfilled
//	 reject  : rejected
// 4.then方法内部做的事就是判断promise的状态 如果成功调用成功的函数 如果失败调用失败的函数 	then方法是被定义在原型对象中的
// 5.then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数 表示失败之后的原因
// 内部调用then方法时 判断此时状态是否为pending 确保状态更改后不会再有改变,
// 执行时判断当前状态为成功还是失败，调用对应函数方法并赋予对应值 如果有异步执行 当前状态为等待， 应存储成功和失败的回调函数 赋予初始值, 在各个方法内部判断是否存在回调函数 存在就调用 解决异步处理的问题
// 7.then方法是可以链式调用的，后面的then方法的回调函数拿到的值是上一个then方法的回调函数的返回值
// 8.链式调用then方法的回调函数中不能够返回当前这个then方法它返回的值 即then()和then(other())的返回值不能一样
const MyPromise = require('./Promise_study')

let promise = new MyPromise((resolve, reject) => {
	// setTimeout(() => {
	//	resolve('成功.....')
	// }, 2000);
	resolve('成功.....')
	// reject('失败')
})

// 把promise用变量来接收,可以调用then方法,传入两个参数,个成功一个失败
// promise.then(value => {
// 	console.log(value)
// }, reason => {
// 	console.log(reason)
// })

function other() {
	return new MyPromise((resolve, reject) => {
		resolve('other')
	})
}

promise.then(value => {
	console.log(value)
	return other()
}).then(value => {
	console.log(value)
})