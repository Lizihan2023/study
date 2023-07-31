// [4,5,7,4,40,20,3]
// 将数组从小到大排序
// 
let arr = [4, 5, 7, 1, 40, 20, 3]
// arr.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//     if (a < b) {
//         return -1
//     }
//     return 0
// })
// console.log(arr);

const newArr = []// const newArr = new Array()
let minNumber = - 1 // 最小值
for (let i = 0; i < arr.length; i++) { // i = 0  i = 1  i = 2  i = 3 。 i = 6
    minNumber = arr[i]  // 40
    if (newArr.length == 0) {
        newArr.push(minNumber) 
    } else {
        // 记录插入的位置
        let index = newArr.length //4 [1,4,5,7]

        for (let j = 0; j < newArr.length; j++) { // j = 0 
            const item = newArr[j] //1
            if (item >= minNumber) {
                index = j
                break;
            }

            // if (item >= minNumber) { // 4 >= 4 true
            //     // splice 插入任意位置
            //     // newArr.splice(j, 0, minNumber)
            //     // ...
            //     break
            // } else {
            //     // push
            //     // newArr.push(minNumber) // 5  == [4,5,7]
            //  newArr.splice(newArr.length,0,minNumber)
            // }
            // splice 插入任意位置
        }

        newArr.splice(index, 0, minNumber) //[1,4,5,7] + 40

        // // 新数组中的值越来越多
        // for (let j = 0; j < newArr.length; j++) { // j = 0
        //     const newItem = newArr[j] // 4
        //     if (newItem > arr[i]) {
        //         newArr.push(arr[i])
        //     }
        // }
    }
    // if (arr[i] > arr[i + 1]) {

    // }
}

console.log(newArr)

// function sort(arr) {
//     const newArr = []
//     // 做一些操作，返回一个新的数组，从小到大排序

//     return newArr
// }