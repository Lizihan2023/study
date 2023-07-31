function getPromise(fileName) {
    let p = new Promise((resolve, reject) => {
        fs.readFile(`./data/${fileName}.txt`, 'UTF-8', (err, data) => {
            if (err == null) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
    return p
}

getPromise(a).then((data) => {
    console.log(data)
    return getPromise(b);
}).then((data) => {
    console.log(data);
    return getPromise(c)
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})