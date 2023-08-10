// '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'
const nums = [
    { value: '7', type: 'num' },
    { value: '8', type: 'num' },
    { value: '9', type: 'num' },
    { value: '4', type: 'num' },
    { value: '5', type: 'num' },
    { value: '6', type: 'num' },
    { value: '1', type: 'num' },
    { value: '2', type: 'num' },
    { value: '3', type: 'num' },
    { value: '0', type: 'num' },
    { value: '00', type: 'num' },
    { value: '.', type: 'dot' },
]
// ['DEL', 'AC', 'x', '÷', '+', '-', '=']
const operators = [
    { value: 'DEL', type: 'del' },
    { value: 'AC', type: 'ac' },
    { value: 'x', type: '*' },
    { value: '÷', type: '/' },
    { value: '+', type: '+' },
    { value: '-', type: '-' },
    { value: '=', type: 'equal' },
]

function isDot(char) {
    return char === '.'
}

function isNum(char) {
    return !isNaN(Number(char))
}

function isOperator(char) {
    return char === '+' || char === '-' || char === 'x' || char === '÷'
}

const logs = []
const history = []

function renderCalculator() {
    const wrapper = document.getElementById('wrapper')
    wrapper.appendChild(renderNums())
    wrapper.appendChild(renderOperators())
}

function renderNums() {
    const numsDiv = document.createElement('div')
    numsDiv.classList.add('nums')
    nums.forEach(num => {
        const button = document.createElement('button')
        button.classList.add('num')
        button.textContent = num.value
        button.setAttribute('type', 'button')
        numsDiv.appendChild(button)
        button.onclick = () => {
            numClick(num)
        }
    })
    return numsDiv
}

function renderOperators() {
    const operatorsDiv = document.createElement('div')
    operatorsDiv.classList.add('operators')
    operators.forEach(operator => {
        const button = document.createElement('button')
        button.classList.add('operator')
        button.textContent = operator.value
        button.setAttribute('type', 'button')
        if (operator.value == '=') {
            button.classList.add('equal')
        }
        button.onclick = () => {
            operatorClick(operator)
        }
        operatorsDiv.appendChild(button)
    })
    return operatorsDiv
}

function renderHistory() {
    const historyDom = document.getElementById('history')
    historyDom.innerHTML = ''
    historyDom.style.display = 'block'
    const close = document.createElement('div')
    const closeA = document.createElement('a')
    close.classList.add('close')
    closeA.textContent = 'X'
    closeA.onclick = () => {
        historyDom.style.display = 'none'
    }
    close.appendChild(closeA)
    historyDom.appendChild(close)

    history.forEach((item, index) => {
        const itemDom = document.createElement('div')
        itemDom.classList.add('item')
        itemDom.textContent = item
        historyDom.appendChild(itemDom)
    })


}

function print() {
    const resultDom = document.getElementById('result')
    const value = logs.length > 0 ? logs.join(' ') : 0
    console.log(logs);
    resultDom.textContent = value
}

function numClick(num) {
    const { value, type } = num
    addLog(value, type)
}

function clear() {
    logs.splice(0, logs.length)
}

function del() {
    const len = logs.length
    const last = logs[len - 1]
    if (last === undefined) {
        return
    }
    if (last.length === 1) {
        logs.pop()
    } else {
        logs[len - 1] = last.slice(0, last.length - 1)
    }
    print()
}

function operatorClick(operator) {
    const { value, type } = operator
    addLog(value, type)
}

function addLog(value, type) {
    const len = logs.length
    const last = logs[len - 1]
    const lastChar = last != undefined ? last[last.length - 1] : ''
    switch (type) {
        case 'num':
            if (last === undefined) {
                logs.push(value)
                break;
            }
            if (isOperator(lastChar)) {
                logs.push(value)
            } else {
                logs[len - 1] += value
            }
            break;
        case 'dot':
            if (last === undefined) return
            if (isNum(lastChar) && !last.includes('.')) {
                logs[len - 1] += value
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (last === undefined) return
            if (isNum(last)) {
                logs.push(value)
            } else if (isOperator(last)) {
                logs[len - 1] = value
            }
            break;
        case 'del':
            del()
            break;
        case 'ac':
            clear()
            break;
        case 'equal':
            if (isOperator(lastChar)) {
                logs.pop()
            }
            calculate()
            break;
    }
    print()
}
// logs = [3+32/2*3+3-1] ; logs = [3+16*3+3-1]  logs = [3+48+3-1]
function calculate() {
    const con = logs.join(' ')
    for (let i = 0; i < logs.length; i++) { // i = 0 i = 1 i = 2 i = 3 i=3 i =3 i =4 i =5  i=6 
        const log = logs[i] //   i = 4 / 
        console.log(log); // '3' '*' 9 + 9 * i=3
        if (log === 'x' || log === '÷') { // 循环找到符号进行判断
            const pre = logs[i - 1] // 32
            const next = logs[i + 1] // 2
            const result = log === 'x' ? pre * next : pre / next // result= 32 / 2 16
            logs.splice(i - 1, 3, result) // logs = [3+48+3-1]
            i--  // i = 2  计算完更替值的位置
        }
    }
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '+' || logs[i] === '-') {
            const pre = Number(logs[i - 1])
            const next = Number(logs[i + 1])
            const result = logs[i] === '+' ? pre + next : pre - next
            logs.splice(i - 1, 3, result)
            i--
        }
    }
    const result = logs[0]
    history.push(`${con} = ${result}`)
    console.log(history)
    setTimeout(() => {
        clear()
    });
}

renderCalculator()