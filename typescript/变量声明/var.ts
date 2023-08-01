export function f(condition:boolean, x:number):any {
    if(condition) {
        let x = 100
        return x
    }
    return x
}
console.log(f(false, 0));
console.log(f(true, 0));

function sumMatrix(matrix:number[][]) {
    let sum = 0
    for(let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i]
        for(let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i]
        }
    }
    return sum
}

console.log(sumMatrix([[12]]));

for(let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 100 * i
    )
}
