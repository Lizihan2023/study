console.log(String.fromCharCode(0x0BB7))
console.log(String.raw`Hi\u000A`)
console.log(String.raw`Hi\\n` === "Hi\\\\n")

var a={}
a.name = '张三'
//var  b ={}
