// interface Named {
//     name: string;
// }

// class Person implements Named {
//     name: string;
// }
// let p: Named;
// p = new Person()
function commonFun(type: EventType, handler: (e: Event) => void) {

}
// function inputChange(e: KeyboardEvent) {
//     const _e = <KeyboardEvent>e
//     _e.code 
// }
// function btnClick(e: MouseEvent) {
//     const _e = <MouseEvent>(e)
//     _e.altKey

// }
enum EventType { Mouse, Keyboard }



commonFun(EventType.Keyboard, (e: Event) => {

})



interface Event1 { timestamp: number; }
interface MouseEvent1 extends Event1 {
    x: number;
    y: number;
}
interface KeyEvent extends Event1 { keyCode: number }



function listenEvent(eventType: EventType, handler: (n: Event1) => void) {
    /* ... */
}
let handler: (e: MouseEvent1) => void = (e: MouseEvent1) => {
    console.log(e.x + ',' + e.y)
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, <(e: Event1) => void>handler)

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event1) => console.log((<MouseEvent1>e).x + ',' + (<MouseEvent1>e).y));
listenEvent(EventType.Mouse, <(e: Event1) => void>((e: MouseEvent1) => console.log(e.x + ',' + e.y)));

// <(e: Event) => void> function 类型
//  () => number
// 


function invokeLater(...args: any[]) {
    console.log(args)
    /* ... Invoke callback with 'args' ... */
}
// invokeLater(1, 2, 3, 4, 6)

function invokeLater2(args: number[], callback: (...args: number[]) => void) {
    // console.log(args)
    /* ... Invoke callback with 'args' ... */
    /// ...args
    /// 2,3,4
    callback(...args)

    // a[0]
}
invokeLater2([1, 2, 3, 4, 5, 6, 7, 8], (x, y, z, ...c) => {
    // let a = [1, 2, 3, 4, 5, 6, 7, 8]
    // let [x, y, z, ...c] = [...a]
    console.log(c)
})
