class Point {
	// Do SomeThing
}

console.log(typeof Point) // Function
console.log(Point === Point.prototype.constructor) // true

class Bar {
	doStuff() {
		console.log('abcd')
	}
}

const a = new Bar()
a.doStuff()

// 构造函数的prototype属性在class类上继续存在，类的所有方法都定义在prototype上面
// 使用方法也完全一致 直接对类使用new创建实例
// 在类的实例上调用方法实际上就是调用原型的方法
// 类的所有实例共享一个原型对象
// (1).类和模块内部默认是严格模式 2. 不存在变量提升 3.类的方法内部this默认指向类的实例，单独使用可能报错，在构造方法中绑定this这样就不会找不到方法了,另一种方法就是箭头函数，箭头函数内部的this总是指向定义时所在的对象