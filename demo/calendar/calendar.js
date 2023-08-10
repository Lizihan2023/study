//1.抽象一维数组
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '=']
const computeArr = ['+', '-', '*', '/']
//2.拿到父级容器
const numberContainer = document.getElementById('number')
const computeContainer = document.getElementById('compute')
const resultInput = document.getElementById('resultInput')
// let result = '' // 记录输出的数据（计算器屏幕显示的）
let logs = [] // 用户输入的步骤 // logs:Array<string> 记录输出的数据（计算器屏幕显示的）
let history = []
// number 点击事件
function numberClick(event) {
    const value = event.target.textContent
    if (value == '.' && !logs.length) return
    if (value == '=' && !logs.includes('=')) {
        // 计算结果
        resultInput.value = calculator()
        // 历史
        // logs.push('=')
        // logs.push(result)
        // history.push(logs)
        logs = []
        return
    }
    logs.push(value) // string
    print()
}

// 符号的点击事件
function computeClick(event) {
    // 没有输入任何值
    if (!logs.length) return
    const value = event.target.textContent
    const last = logs[logs.length - 1] // string
    // 1是加减乘除的符号
    const isComputeSymbol = ['*', '/', '+', '-'].includes(last)
    if (isComputeSymbol) {
        logs.splice(logs.length - 1, 1, value)
    } else {
        logs.push(value)
    }
    print()
}

// 打印用户输入的操作日志
function print() {
    console.log(logs)
    // result = logs.join(' ')
    resultInput.value = logs.join('')
}

//3.创建btn dom 插入到父级容器中
numberArr.forEach(ele => { // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '=']
    const btn = document.createElement('button')
    btn.textContent = ele
    btn.className = 'button'
    // btn 需要绑定事件
    btn.onclick = numberClick

    numberContainer.appendChild(btn)
})
computeArr.forEach(ele => {
    const btn = document.createElement('button')
    btn.textContent = ele
    btn.className = 'button'
    btn.onclick = computeClick
    computeContainer.appendChild(btn)
})
// 回删
function del() {
    if (!logs.length) return
    logs.pop()
    print()

}
// core 计算
function calculator() {
    const str = logs.join('')
    let a = str.indexOf('*')
    let b = str.indexOf('/')
    console.log(str);
}
