// ================================
// 📌 TypeScript - Literal Types
// ================================
//
// Literal Types allow a variable to have an EXACT, specific value  
// instead of just a general type (like string or number).

// ----------------
// String Literal Type
// ----------------
let direction: "up" | "down" | "left" | "right";

direction = "up";      // ✅ valid
direction = "left";    // ✅ valid
// direction = "forward"; // ❌ Error (not allowed)


// ----------------
// Number Literal Type
// ----------------
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 3; // ✅ valid
// diceRoll = 7; // ❌ Error


// ----------------
// Boolean Literal Type
// ----------------
type YesNo = true | false;

let answer: YesNo = true;  // ✅
answer = false;            // ✅
// answer = "yes";         // ❌ Error


// ----------------
// Using Literal Types in Functions
// ----------------
function move(direction: "up" | "down" | "left" | "right") {
  console.log("Moving:", direction);
}


move("up");   // ✅
move("right"); // ✅
// move("jump"); // ❌ Error

// ----------------
// Real-World Example: API Status
// ----------------
type Status = "success" | "error" | "pending";

function printStatus(status: Status) {
  if (status === "success") {
    console.log("✅ Operation successful!");
  } else if (status === "error") {
    console.log("❌ Something went wrong!");
  } else {
    console.log("⏳ Still loading...");
  }
}

printStatus("success");
printStatus("pending");


// ================================
// 📌 Summary Table
// ================================
//
// | Concept              | Example                                  |
// |-----------------------|------------------------------------------|
// | String literal type   | let dir: "up" | "down";                  |
// | Number literal type   | let roll: 1 | 2 | 3 | 4 | 5 | 6;         |
// | Boolean literal type  | type YesNo = true | false;               |
// | Function with literal | function move(d: "up" | "down") {}       |
// | Real-world use        | type Status = "success" | "error" | "pending" |
//