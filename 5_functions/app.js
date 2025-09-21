"use strict";
// ================================
// 📌 TypeScript - Functions (with Types)
// ================================
//
Object.defineProperty(exports, "__esModule", { value: true });
// In TypeScript, we can define types for function parameters
// and return values. This ensures type safety when calling functions.
// ----------------
// Function with Parameters & Return Type
// ----------------
function add(a, b) {
    return a + b;
}
let sum = add(10, 20);
// ----------------
// Function with Explicit Return Type
// ----------------
function greet(name) {
    return `Hello, ${name}`;
}
// ----------------
// Function Returning void
// ----------------
function logMessage(message) {
    console.log(message);
}
// ----------------
// Anonymous Function / Arrow Function with Types
// ----------------
const multiply = (a, b) => {
    return a * b;
};
let ans = multiply(10, 5);
// ----------------
// Function Type (used in variables)
// ----------------
let calculator;
// 🔹 Example 1: Assigning a function
calculator = function (a, b) {
    return a + b;
};
console.log(calculator(5, 10)); // 15
// 🔹 Example 2: Using an Arrow Function
calculator = (a, b) => a * b;
console.log(calculator(3, 4)); // 12
function printName(firstName, lastName) {
    return lastName ? `Namste ${firstName} ${lastName}` : `Namste ${firstName}`;
}
console.log(printName("Alex"));
console.log(printName("Alex", "carry"));
// ----------------
// Default Parameters
// ----------------
function countDown(start = 10) {
    while (start > 0) {
        console.log(start--);
    }
    console.log("Done!");
}
countDown(); //starts with 10;
countDown(5); //start with 5;
// ----------------
// Rest Parameters
function sumAll(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
//# sourceMappingURL=app.js.map