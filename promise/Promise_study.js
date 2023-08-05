// 用常量定义状态
const PENDING = 'pending' // 等待
const FULFILLED = 'fulfilled' // 成功
const REJECTED = 'rejected' // 失败


class MyPromise { // 创建类 创建构造函数和执行器
	constructor(executor) { // executor: 执行
		executor(this.resolve, this.reject)  // 在类里面调用方法使用this
	}
	// 构造成功失败的方法  将来会直接调用方法 定义为普通函数this指向window或undefined 所以定义为箭头函数 让函数内部指向为这个类的实例对象
	// status为Promise状态
	status = PENDING  //将状态定义为常量  默认为等待状态pending
	// 每一个promise都有自己成功失败的值 要把这两个属性变为实例
	// 成功的值:
	value = undefined
	// 失败的原因:
	reason = undefined
	// 成功回调
	successCallback = []
	// 失败回调
	failCallback = []
	resolve = value => {
		// 如果状态不是等待，阻止程序向下运行
		if (this.status !== PENDING) {
			return
		}
		// 将状态更改为成功
		this.status = FULFILLED
		//保存成功后的值
		this.value = value
		// 判断成功回调是否存在,如果存在就调用
		// this.successCallback && this.successCallback(this.value)
		// 当多个then方法时以数组的长度为循环条件 通过shift方法 从头往后 再把值赋予
		while (this.successCallback.length) {
			this.successCallback.shift()(this.value)
		}
	}
	reject = reason => {
		if (this.status !== PENDING) {
			return
		}
		// 将状态更改为失败
		this.status = REJECTED
		// 保存失败后的原因
		this.reason = reason
		// 判断失败回调是否存在,如果存在就调用
		// this.failCallback && this.failCallback(this.reason)
		while (this.failCallback.length) {
			this.failCallback.shift()(this.reason)
		}
	}
	then(successCallback, failCallback) {
		// 只有当返回值为promise对象时，后面的then才可以继续调用
		let promise2 = new MyPromise((resolve, reject) => { // 当创建实例时 我们可以传入一个执行器
			// 判断状态
			if (this.status === FULFILLED) {
				// 给成功回调函数定义一个变量 使他的值可以返回 当调用成功回调时，值会被传入下一个then方法
				let x = successCallback(this.value)
				// 判断x的值是普通值还是promise对象
				//如果是普通值 直接调用resolve
				//如果是promise对象 查看promise对象返回的结果
				// 再根据promise对象返回的结果 决定进行resolve还是reject
				resolvePromise(x, resolve, reject)
			} else if (this.status === REJECTED) {
				failCallback(this.reason)
			} else {
				// 当为等待状态时 ，把成功和失败的函数存储起来
				this.successCallback.push(successCallback)
				this.failCallback.push(failCallback)
				// 当调用多个then方法时，存储一个值已经不满足需求，需要把默认值赋为数组[],再通过push存储起来
			}
		})
		return promise2
	}
}
// 判断x的值是普通值还是promise对象 只用判断x是不是MyPromise这个对象的实例 如果是实例他就是一个promise对象，如果不是他就是一个普通值
function resolvePromise(x, resolve, reject) {
	if(x instanceof MyPromise) {
		// promise对象
		//x.then(value => resolve(value), reason => reject(reason))
		x.then(resolve, reject)
	} else {
		// 普通值
		resolve(x)
	}
}

module.exports = MyPromise

