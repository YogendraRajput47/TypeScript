// ================================
// 📌 TypeScript - Type Annotations
// ================================
//
// 👉 Type Annotations allow us to explicitly declare the type of a variable,
// function parameter, or return type.
// This helps TypeScript catch errors at compile time.
// ----------------
// Variable Annotations
// ----------------
var userName = "Alex carry";
var userAge = 30;
var isUserLoggedIn = true;
// ----------------
// Function Annotations
// ----------------
function greet(name) {
    return "Good morning ".concat(name);
}
var greeting = greet("Alex");
