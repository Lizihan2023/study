//需求，封装成一个基于promise 的网络请求
// get('url').then(res => {
//     console.log(res)// api 返回的数据
// })

// 1.promise是一个类 当执行这个类的时候，需要传入一个执行器进去，执行器会立即执行
// 2.promise有三种状态 分别是成功fulfilled 失败 rejected 等待 pending
//   pending -> fulfilled
//	 pending -> rejected
//   一旦状态确定就不可改变
// resolve reject函数就是用来更改状态的

class MyPromise { // 创建类 创建构造函数和执行器
		constructor(executor) { // executor: 执行
			executor(this.resolve, this.reject)  // 在类里面调用方法使用this
		}
		// 构造成功失败的方法  将来会直接调用方法 定义为普通函数this指向window或undefined 所以定义为箭头函数 让函数内部指向为这个类的实例对象
		status = 
		resolve = () => {
			
		}
		reject = () => {
			
		}
}



new Promise((resolve, reject) => {
	resolve('成功')
	reject('失败')
})