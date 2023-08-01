abstract class Department {
    constructor(public name: String) {

    }
    printName(): void {
        console.log("Department name:" + this.name);
    }
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing")
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");

    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department:Department  // 允许创建一个对抽象对象的引用
department = new Department() // error 不能创建一个抽象对象的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department = printName()
department = printMeeting()
department = generateReports() // error 方法在声明的抽象类中不存在