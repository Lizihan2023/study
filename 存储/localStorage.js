let p = {
    name:'张三',
    age:18
}
function saveDate() {
    window.localStorage.setItem('msg', 'hello')
    localStorage.setItem('person', JSON.stringify(p))
}
// saveDate()

function readDate() {
    console.log(localStorage.getItem('msg'));
    console.log(JSON.parse(localStorage.getItem('person')));
}
// readDate()

function deleteDate() {
    localStorage.removeItem('msg')
}
// deleteDate()

function clearDate() {
    localStorage.clear()
}
// clearDate()