const fs = require('fs') // node.js

function myReadFile(fileName, callback) {
    fs.readFile(`./${fileName}.txt`, 'UTF-8', (err, data) => {
        if (err == null) {
            callback(data)
        }
    })
}
function getPromise(fileName) {
    let p = new Promise((resolve, reject) => {
        fs.readFile(`./${fileName}.txt`, 'UTF-8', (err, data) => {
            if (err == null) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
    return p // Promise 
}
getPromise('test')
    .then((data) => {
        console.log(data)
        return getPromise('test1'); // Promise
    }).then((data) => {
        console.log(data);
        // return getPromise(c)
    })
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 回调地狱的问题
myReadFile('test', (data) => {
    console.log('myReadFile', data)
    myReadFile('test1', (data) => {

    })
})
