// 循环
// for(let i = 1; i <= 9; i++) {
//     let char = ''
//     for(let j = 1; j <= i; j++) {
//         char += `${i} * ${j} = ${i * j}`
//     }
//     console.log(char);
// }

// for (let i = 9; i > 0; i--) { // i = 9; i = 8; i = 7; i = 6; i = 5; i = 4; i = 3; i = 2; i = 1 ; i = 0; i = -1;
//     let char = ''
//     for (let j = 9; j > 0; j--) {//j = 9; i = 8; i = 7; i = 6; i = 5; i = 4; i = 3; i = 2; i = 1
//         char += `${i} * ${j} = ${i * j}`
//     }
//     console.log(char);
// }

// for(let i = 9; i > 0; i--) {
//     let char = ''
//     for(let j = 1; j <= i; j++) {
//         char += `${i} * ${j} = ${i * j}`
//     }
//     console.log(char);
// }

// for (let i = 1; i <= 9; i++) {
//     let char = ''
//     let space = 9 - i
//     for (j = 1; j <= space; j++) {
//         char += '           '
//     }
//     // console.log('i', i)// 1 - 9 
//     for (j = 1; j <= i; j++) { // 1- 9
//         const value = `${i} * ${j} =${i * j} `
//         char += value
//     }
//     console.log(char)
// }

for (let i = 1; i <= 9; i++) {
    let char = ''
    let space = i//0
    // console.log(i);
    for (let j = 1; j < space; j++) { // j =1> 0 j++ j=2  j = 正无穷大
        char += '*************'
    }
    for (let j = i; j <= 9; j++) {
        const value = `${i} * ${j} =${i * j} `
        char += value
    }
    console.log(char);
}

// 退出条件
// i >=x ， i++ // 无穷大 error
// i<=x, i-- // 无穷小 error