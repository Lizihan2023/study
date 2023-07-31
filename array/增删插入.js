// Array.prototype.
// 增
// push unshift splice
// 删除 
// shift pop splice 
// 插入任意位置,可替换 
// splice 
// const arr = [1, 3, 5]

// arr.splice(arr.length, 0, 2) //[1,4,5,7] + 40
// console.log(arr)

// const fruits = []
// fruits.push('apple', 'banana', 'peach')
// console.log(fruits); // 'apple', 'banana', 'peach'
// fruits[5] = 'mango'
// console.log(fruits[5]); // mango
// console.log(Object.keys(fruits)); // [ '0', '1', '2', '5' ]
// console.log(fruits.length); // 6

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1,10]
// arr.forEach(function(item, index, arr){
//     console.log(item)
//     arr[index]++
// }) 
// const newArr = arr.map(function (item, index, arr) {
//     return item * 2
// })
// console.log(newArr);
// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(10));
// console.log(arr.indexOf(2,5));
// console.log(arr.lastIndexOf(1,8));
// arr.push('red', 'green')
// console.log(arr.shift());
// console.log(arr);
const newArr = ['red','green','awdsa','wadsd','qwetr']
// newArr.splice(0,1,'blue')
// console.log(newArr);
console.log(arr.reduceRight(function(prev,cur,index,arr) {
    return prev + cur
}))