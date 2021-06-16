// Credits: https://youtu.be/WBPrJSw7yQA

export {}

//1. basic variable types: boolean, number, string
let name: string = 'GRACE';
let message: string = `Hi there, my name is ${name}`;

console.log(message);
console.log(name.toLowerCase());

//2. declaring array
let numbers: number[] = [1,2,3];
//or
let numbers2: Array<number> = [1,2,3];

//3. mixed-value array (Tuple) --> fixed number of values
let arr: [string, number] = ['Grace', 23];

//4. set of numeric values (enum)
enum Color {Red, Green , Blue};

let c: Color = Color.Green;
console.log(c);

//5. any type
let randomValue: any = 10;

randomValue = 'Grace';

randomValue = true; // no error thrown, can assign string methods and still no error thrown until runtime

//6. unknown type
let anotherRandomValue: unknown = 10;
anotherRandomValue = 'TEN';
(anotherRandomValue as string).toLowerCase(); //can do type casting, unlike 'any' type


//7. type inference
let b = 10;
// b = 'Grace'; //Type 'string' is not assignable to type 'number'
b.toFixed(1); //can use number methods

let multiType: number | boolean;
multiType = 10; //number can
multiType = true; //boolean also can

//8. functions
//8a. function with optional second parameter
function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}

console.log(add(1, 2))
console.log(add(5));


//8b. function with default second parameter
function multiply(num1: number, num2: number = 2): number {
    if (num2) {
        return num1 * num2;
    } else {
        return num1;
    }
}

console.log(multiply(1, 2))
console.log(multiply(5));


function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Evan',
    lastName: 'Grace'
}

fullName(p);

//9 interface -- better way to define objects that can be passed as function parameters
interface People {
    firstName: string;
    lastName?: string; //optional property
}

function fullName2(person: People) {
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName2(p);


//10. classes and access modifiers
class Employee {
    private employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}


let emp = new Employee('Grace')

emp.greet();



//10a. inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`This manager is delegating work`);
    }
}


let manager = new Manager('Joyge');

manager.delegateWork();

// console.log(manager.employeeName); //throws error because of private access modifier
manager.greet();
