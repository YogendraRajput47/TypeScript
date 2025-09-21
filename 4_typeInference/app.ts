// ================================
// 📌 TypeScript - Type Inference
// ================================
//
// 👉 Type Inference means TypeScript can "guess" the type of a variable,
// function return, or expression without explicitly declaring it.
// This makes the code shorter while keeping type safety.

// ----------------
// Variable Inference
// ----------------
let x = 10;        // inferred as number
let y = "hello";   // inferred as string
let isDone = true; // inferred as boolean


// ----------------
// Function Inference (return type)
// ----------------
function multiply(a: number, b: number) {
  return a * b; 
  // return type is inferred as number
}


// ----------------
// Contextual Typing
// ----------------
window.addEventListener("click", (event) => {
  // TypeScript infers that 'event' is of type MouseEvent
  console.log(event.clientX, event.clientY);
});

// ----------------
// Best Practice
// ----------------
// ✅ Let TypeScript infer types when it's obvious.
// ✅ Use explicit annotations when the type is not clear 
//    or when you want more readability.

// Example:
let inferred = "Alice"; // inferred as string
let explicit: string = "Alice"; // explicitly annotated