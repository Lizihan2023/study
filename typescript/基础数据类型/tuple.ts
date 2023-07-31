export let x:[string,number]
x = ['hello', 10]
// x = [10, 'hello'] err  num不是str, str不是num
console.log(x[0].substring(1));
// console.log(x[1].substring(1)); err num does not have 'substring
