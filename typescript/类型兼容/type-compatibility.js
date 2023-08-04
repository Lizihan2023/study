// interface Named {
//     name: string;
// }
// class Person implements Named {
//     name: string;
// }
// let p: Named;
// p = new Person()
function commonFun(type, handler) {
}
// function inputChange(e: KeyboardEvent) {
//     const _e = <KeyboardEvent>e
//     _e.code 
// }
// function btnClick(e: MouseEvent) {
//     const _e = <MouseEvent>(e)
//     _e.altKey
// }
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
commonFun(EventType.Keyboard, function (e) {
});
function listenEvent(eventType, handler) {
    /* ... */
}
var handler = function (e) {
    console.log(e.x + ',' + e.y);
};
// Unsound, but useful and common
listenEvent(EventType.Mouse, handler);
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x + ',' + e.y); }));
// <(e: Event) => void> function 类型
//  () => number
// 
function invokeLater() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
    /* ... Invoke callback with 'args' ... */
}
// invokeLater(1, 2, 3, 4, 6)
function invokeLater2(args, callback) {
    // console.log(args)
    /* ... Invoke callback with 'args' ... */
    /// ...args
    /// 2,3,4
    callback.apply(void 0, args);
    // a[0]
}
invokeLater2([1, 2, 3, 4, 5, 6, 7, 8], function (x, y, z) {
    var c = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        c[_i - 3] = arguments[_i];
    }
    // let a = [1, 2, 3, 4, 5, 6, 7, 8]
    // let [x, y, z, ...c] = [...a]
    console.log(c);
});
