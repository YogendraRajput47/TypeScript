// ================================
// 📌 TypeScript - Type Aliases
// ================================

// Type aliases in TypeScript provide a way to give a new name to any existing type. This enhances code readability, reusability, and maintainability, especially when dealing with complex or repetitive type definitions.

// They are very flexible and can be used for primitives, objects, unions, tuples, and functions.

// ----------------
// Alias for a Primitive Type
// ----------------
type ID = number | string; // ID can be number or string

let userId: ID;
userId = 101; // ✅ valid
userId = "abc123"; // ✅ valid
// userId = true;   // ❌ Error

// ----------------
// Alias for an Object
// ----------------

type Person1 = {
  name: string;
  age: number;
  isActive?: boolean; // optional
};

let user2: Person1 = {
  name: "Alice",
  age: 25,
  isActive: true,
};

// ----------------
// Alias for a Function
// ----------------
type Calculator1 = (a: number, b: number) => number;

const add1: Calculator1 = (x, y) => x + y;
const multiply1: Calculator1 = (x, y) => x * y;

// ----------------
// Alias for a Tuple
// ----------------
type Point1 = [number, number];
let p2: Point1 = [10, 20];

// ----------------
// Alias for Union Types
// ----------------
type Status = "success" | "error" | "pending";

let currentStatus: Status;
currentStatus = "success"; // ✅ valid
// currentStatus = "failed"; // ❌ Error

//Extending aliases// Base types
type Person3 = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Extending using &
type Staff = Person3 & Employee;

const staffMember: Staff = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "HR",
};

// ================================
// 📌 Summary Table
// ================================
//
// | Feature             | Example                                      |
// |---------------------|----------------------------------------------|
// | Primitive Alias      | type ID = number | string                     |
// | Object Alias         | type Person = { name: string; age: number } |
// | Function Alias       | type Calc = (a:number,b:number)=>number      |
// | Tuple Alias          | type Point = [number, number]               |
// | Union Alias          | type Status = "success" | "error" | "pending" |
//

// Type Aliases vs Interfaces
// | Feature                | Type Alias (type)                              | Interface (interface)                     |
// |------------------------|-----------------------------------------------|------------------------------------------|
// | Purpose                | Gives a name to any type (primitive, object, union, tuple, function) | Describes the shape of objects or classes |
// | Extending / Inheritance| Can use intersections (&) to combine types    | Can extend other interfaces (extends)    |
// | Reopenable             | ❌ Cannot add new fields after creation        | ✅ Can merge declarations (useful for libraries) |
// | Complex types          | ✅ Works for unions, tuples, functions, primitives, objects | ❌ Mainly for object shapes (cannot do union or tuple directly) |
// | Syntax                 | `type Name = string \| number;`               |                                          |
// | Use case example       | Aliasing unions, function signatures, tuples  | Defining object/class structure           |

// 🔹 When to use what
// | Scenario                             | Recommended                                                              |
// |-------------------------------------|--------------------------------------------------------------------------|
// | Object/class structure               | Interface                                                                |
// | Function type or tuple               | Type Alias                                                                |
// | Union types                          | Type Alias                                                                |
// | Extending or merging multiple definitions | Interface                                                            |
// | Reusable type for many shapes        | Depends on type: use type for unions/functions, interface for objects   |

// 💡 Rule of Thumb:

// Use interfaces for objects and classes.

// Use type aliases for everything else (unions, tuples, function types, primitives).
