function identity<T>(arg:T):T{
    return arg
}

console.log(identity("myString"));

function tArray<T>(arr:T[]):T[] {
    console.log(arr.length);
    
    return arr
}

tArray([1,2,3,4,5])