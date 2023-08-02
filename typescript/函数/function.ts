function add(x, y) {
    return x + y
}

console.log(add(2, 5));

export function person(firstName: string, lastName?: string): string {
    return firstName + '' + lastName
}

console.log(person("bob"));
console.log(person("bob", "jim"));
console.log((person("bob", "jim", "tom")));
// 可选参数和默认参数

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(":");
}

// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// console.log(buildNameFun("bob", "asd","sad"));
console.log(buildName("bob", "jim","kate"));
