// ================================
// 📌 TypeScript - Union Types
// ================================
//
// A Union Type allows a value to be one of several types.
// Use the | (pipe) symbol to combine types.

// ----------------
// Basic Union Type
// ----------------

let userId1: string | number;

userId1 = "abc123";
userId1 = 12388744;

// ----------------
// Union in Functions
// ----------------
function printId(id: number | string): void {
  console.log("ID:", id);
}
printId(101); // ✅
printId("xyz"); // ✅

// ----------------
// Narrowing a Union
// ----------------
// 👉 Use type guards (typeof, instanceof, etc.) to "narrow" the type
// 🔹 Problem

// When you use a union type (like string | number),
// TypeScript doesn’t know which one it is at runtime.

// So if you try:

// function getLength(value: string | number): number {
//   return value.length; // ❌ Error
// }

// 🔹 Solution → Narrowing

// We need to check the type first, then TypeScript will “narrow” the union to the correct type.

function getLength(value: string | number): number {
  // 1. Check if value is a string
  if (typeof value === "string") {
    // ✅ Inside this block, TS knows value is string
    return value.length;
  } else {
    // ✅ Otherwise, TS knows it's number
    return value;
  }
}

console.log(getLength("Hello")); // "Hello" is string → length = 5
console.log(getLength(42)); // 42 is number → return 42

// 🔹 Why it works

// typeof value === "string" → narrows type to string
// else → narrows type to number
// Now we can safely use .length only when it’s a string.

// ✅ Think of narrowing as telling TypeScript exactly which type you’re working with at the moment.

// 🔹 Definition of Narrowing

// Narrowing is when TypeScript takes a broad type (like a union)
// and figures out the more specific type based on checks you write in your code.

// 👉 In other words:
// You start with many possible types, but after a check, TypeScript narrows it down to one type.

// 🔹 Real-world example

type Success = { status: "success"; data: string };
type Error1 = { status: "error"; message: string };

function handleResponse(res: Success | Error1) {
  if (res.status === "success") {
    // ✅ narrowed to Success
    console.log("Data:", res.data);
  } else {
    // ✅ narrowed to Error
    console.log("Error:", res.message);
  }
}

// ✅ In short:
// Narrowing = making TypeScript “smarter” about which exact type is being used inside your code.
