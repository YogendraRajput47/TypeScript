// ================================
// 📌 TypeScript - Functions (with Types)
// ================================
//

// In TypeScript, we can define types for function parameters
// and return values. This ensures type safety when calling functions.

// ----------------
// Function with Parameters & Return Type
// ----------------

function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(10, 20);

// ----------------
// Function with Explicit Return Type
// ----------------
function greet(name: string): string {
  return `Hello, ${name}`;
}

// ----------------
// Function Returning void
// ----------------
function logMessage(message: string): void {
  console.log(message);
}

// ----------------
// Anonymous Function / Arrow Function with Types
// ----------------

const multiply = (a: number, b: number): number => {
  return a * b;
};

let ans: number = multiply(10, 5);

// ----------------
// Function Type (used in variables)
// ----------------
let calculator: (x: number, y: number) => number;
// 🔹 Example 1: Assigning a function

calculator = function (a: number, b: number): number {
  return a + b;
};

console.log(calculator(5, 10)); // 15

// 🔹 Example 2: Using an Arrow Function
calculator = (a, b) => a * b;

console.log(calculator(3, 4)); // 12


function printName(firstName: string, lastName?: string): string {
  return lastName ? `Namste ${firstName} ${lastName}` : `Namste ${firstName}`;
}

console.log(printName("Alex"));
console.log(printName("Alex", "carry"));

// ----------------
// Default Parameters
// ----------------

function countDown(start:number=10):void{
    while(start>0){
        console.log(start--);
    }
    console.log("Done!");
}

countDown(); //starts with 10;
countDown(5); //start with 5;


// ----------------
// Rest Parameters
function sumAll(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

function greetAll(greeting: string, ...names: string[]): void {
  names.forEach((name) => console.log(`${greeting}, ${name}`));
}

greetAll("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice
// Hello, Bob
// Hello, Charlie




 