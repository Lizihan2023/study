function Fn() {
	this.name = "abc";
	this.age = 18;
	
	console.log(this)
}

Fn()

var obj = {
    x:10,
  fn: function () {
        console.log(this);  // Object {x: 10, fn: [function fn]}
        console.log(this.x); // 10
  }
};

obj.fn()

var a = 10;

function f1() {
	var b = 20;
	return (a + b);
}
console.log(f1())