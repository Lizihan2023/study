export class Greeter {
    greeting:string;
    constructor(message:string) {
        this.greeting = message;
    }
    greet() {
        return "hello," + this.greeting;
    }
}
let greeter:Greeter;
greeter = new Greeter("world")
console.log(greeter.greet());

