var a = 10;
function fn(b) {
	b = 20;
	console.log(a,b);
}

function fn1() {
	a = 100;
	fn(a)
}

console.log(fn(200))
console.log(fn1())