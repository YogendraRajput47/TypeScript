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
let userName: String = "Alex carry";
let userAge: number = 30;
let isUserLoggedIn: boolean = true;

// ----------------
// Function Annotations
// ----------------
function greet(name: string): string {
  return `Good morning ${name}`;
}

let greeting: string = greet("Alex");

// ----------------
// Parameter + Return Types
// ----------------
function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(10, 20);

// ----------------
// Object Annotations
// ----------------
let person: { name: string; age: number } = {
  name: "Alex",
  age: 41,
};

// ----------------
// Array Annotations
// ----------------
let marks: number[] = [71, 82, 83];
let fruits: string[] = ["Bananan","Mango","Orange"];

// ----------------
// Union Type Annotation (variable can hold more than one type)
// ----------------

let userId:string | number;
userId=123;
userId="abc123";


