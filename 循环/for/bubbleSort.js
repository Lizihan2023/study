// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = len - 1; i > 0; i--) { // i 控制当前轮次比较的数组范围 第一次为 0 - len-1、 第二次为 0-len-2、....
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {       // 相邻元素两两对比
//                 var temp = arr[j + 1];       // 元素交换
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// var last = arr[len]

// let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

// arr = bubbleSort(arr)

// console.log(arr)  // [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

function bubbleSort_ok(arr) {
    for (let i = 0; i < arr.length; i++) { //i= 0  3, i=1 44 i =2 38 
        // console.log('---大循环的下标--- %s', i, arr[i]);
        // console.log(this.length);
        for (let j = i; j >= 1; j--) { // j= i j =0 j = 1 ,j=2 j =1 ,
            // console.log('小循环的下标 %s', j, arr[j]);
            if (arr[j] < arr[j - 1]) { // arr[1] < arr[0] 38 < 44
                const temp = arr[j]  // tmp = arr[2] = 38
                arr[j] = arr[j - 1]  // arr[2] = arr[1]  = 44
                arr[j - 1] = temp // arr[1] = 38
            }
        }
        // const a = clone(arr)
        // console.log('第' + (i + 1) + '轮比较,值为,', a.join(','))
    }
    return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46]
bubbleSort_ok(arr)
console.log(arr);


function sort(newArr) {
    for(let i = 0; i < newArr.length; i++) {
        for(let j = i; j >=1; j--) {
            if(newArr[j] < newArr[j - 1]) {
                const temple = newArr[j]
                newArr[j] = newArr[j - 1]
                newArr[j - 1] = temple
            }
        }
    }
    return newArr
}

let newArr = [10,23,4,567,123,2,44]
sort(newArr)
console.log(newArr);

