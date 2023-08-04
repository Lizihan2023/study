enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction);

export enum Response {
    Yes = 1,
    No = 0
}
function respond(recipient: string, message: Response): void {

}

console.log(respond("princess", Response.Yes));


// 初值为计算值
const getValue = () => {
    return 0;
};
enum ErrorIndex {
    a = getValue(),
    b = 1, // error 枚举成员必须具有初始化的值
    c
}
enum RightIndex {
    a = getValue(),
    b = 1,
    c
}
// 初值为常量
const Start = 1;
enum Index {
    a = Start,
    b, // error 枚举成员必须具有初始化的值
    c
}

// enum Status {
//     Off,
//     On
// }
// const enum Animal {
//     Dog,
//     Cat
// }

// console.log(Status.Off);
// console.log(Animal.Cat);
// 常量枚举

enum Animal {
    dog = 1,
    cat = -1,
    fish,
    element
}
console.log(Animal);

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}
console.log(FileAccess);

enum Gender {
    MAN = 0,
    WOMEN,
}

enum Response1 {
    SUCCESS,
    FAIL
}
class Person {
    gender: number
    constructor(gender: number) {
        this.gender = gender
    }
}
const p = new Person(Gender.MAN)

if (p.gender == Gender.MAN) {

}


