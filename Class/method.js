// static 
class Foo {
	static classMethod() {
		return "hello";
	}
}
Foo.classMethod()

const a = new Foo()
// a.classMethod() // TypeError
// 方法前加上static关键字，表示该方法不会被实例继承，而是直接通过类来调用，
// 静态方法包含this关键字，这个this指向类而不是创造的实例对象

// 父类的静态方法还可以继承给子类
class foo extends Foo {
	
}
foo.classMethod();

// 私有属性提案, 为class加了私有属性，方法是在属性名之前加上 # 符号
class Fo {
	#count = 1;
	get value() {
		console.log("Getting the cuttent value!")
		return this.#count;
	}
	incre() {
		this.#count;
	}
}
const b = new Fo();
b.#coutn // Error
// 私有属性只能在类内部访问 这种写法不仅可以定义私有属性还可以定义私有方法 #incre() {}

// 私有属性不限于从this引用，只要是在类的内部，实例也可以引用私有属性。
class Boo {
  #privateValue = 42;
  static getPrivateValue(foo) {
    return foo.#privateValue;
  }
}
Boo.getPrivateValue(new Boo()); // 42
// 上面代码允许从实例boo上面引用私有属性