// 倒计时的例子
// 高考倒计时 x 天 小时 x 分钟 x 秒
// 到了高考前一天，停止计时
// while 高考 do something 
const dbox = document.querySelectorAll('.box div')[0]
const hbox = document.querySelectorAll('.box div')[1]
const mbox = document.querySelectorAll('.box div')[2]
const sbox = document.querySelectorAll('.box div')[3]
// console.log(dbox,hbox,mbox,sbox);
const totime = '2023-7-28 12:00:00'
function intervalId() {
    const date = new Date()
    const inputTime = new Date(totime)
    const residueTime = inputTime - date
    if (residueTime < 0) {
        console.error('没有时间')
        return false
    }

    const seconds = residueTime / 1000
    const minutes = seconds / 60  //分钟
    const hours = minutes / 60 // 小时数

    let d = Math.floor(hours / 24) // 

    let h = Math.floor(hours % 24) //

    let m = Math.floor(minutes % 60)

    let s = Math.floor(seconds % 60)

    // let h = Math.floor(residueTime / 1000 / 60 / 60 % 24) 
    // let m = Math.floor(residueTime / 1000 / 60 % 60)
    // let s = Math.floor(residueTime / 1000 % 60 )
    //     d = d < 10 ? '0' + d : d
    // h = h < 10 ? '0' + h : h
    // m = m < 10 ? '0' + m : m
    // s = s < 10 ? '0' + s : s
    console.log(d + "天" + h + "时" + m + "分" + s + "秒");

    dbox.innerHTML = d + '天'
    hbox.innerHTML = h + '时'
    mbox.innerHTML = m + '分'
    sbox.innerHTML = s + '秒'
    setTimeout(() => {
        intervalId()
    }, 1000)
}
intervalId()
// setInterval(intervalId, 1000)

// Math.floor(2.9) // 向下取整