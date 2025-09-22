// ================================
// 📌 TypeScript - Tuples
// ================================
//
// A Tuple is a fixed-length array where each element has a specific type.
// Useful when the order and type of elements matter.

// ----------------
// Basic Tuple
// ----------------

let person: [string, number]; // name + age

person = ["Alice", 25]; // ✅ valid
// person = [25, "Alice"]; // ❌ Error: wrong order
// person = ["Alice", 25, true]; // ❌ Error: too many elements

// ----------------
// Tuple with Optional Elements
// ----------------
let rgb: [number, number, number?]; // third value optional

rgb = [255, 0]; // ✅ valid
rgb = [255, 0, 128]; // ✅ valid

// ----------------
// Tuple with Readonly
// ----------------
let coordinates: readonly [number, number] = [10, 20];
// coordinates[0] = 15; // ❌ Error: readonly

// ----------------
// Using Tuples in Functions
// ----------------
function getUser(): [number, string] {
  return [1, "Alice"]; // ID + Name
}

let user = getUser();
console.log(user[0]); // 1
console.log(user[1]); // Alice

// ----------------
// Destructuring Tuples
// ----------------
let [id, firstName] = getUser();
console.log("ID:", id, "Name:", firstName);

// ----------------
// Real-World Example: Coordinates
// ----------------
type Point = [number, number];

function distance(a: Point, b: Point): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance([0, 0], [3, 4])); // 5

// ================================
// 📌 Summary Table
// ================================
//
// | Concept                | Example                             |
// |-------------------------|-------------------------------------|
// | Basic tuple             | let person: [string, number];       |
// | Optional element        | let rgb: [num, num, num?];          |
// | Readonly tuple          | let coords: readonly [num, num];    |
// | Function return tuple   | function getUser(): [id, name] {}   |
// | Real-world example      | type Point = [number, number];      |
//

// ✅ Quick Understanding:
// Arrays = flexible length & same type.
// Tuples = fixed length & each position has its own type.
