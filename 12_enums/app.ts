// ================================
// 📌 TypeScript - Enums
// ================================
//
// What is an Enum?
// An Enum (short for enumeration) in TypeScript is a special type that lets you define a group of named constants.
// It makes your code more readable and maintainable by replacing “magic numbers” or “magic strings” with descriptive names.
// Enums can be numeric, string-based, or even a mix of both.
// They are compiled into plain JavaScript objects.
// Enums allow you to define a set of named constants.
// Useful when you need a fixed set of related values with names.

// 🔹 Key Characteristics
// Represents a fixed set of related values (directions, roles, statuses, etc.).
// Provides friendly names instead of raw values.
// Supports:
// Numeric enums → auto-increment numbers.
// String enums → fixed string constants.
// Heterogeneous enums → mix of numbers + strings (less common).
// Two-way mapping in numeric enums:
// You can get the name from the number and vice versa.

// 🔹 When to Use Enums?
// When you need a fixed set of choices (e.g., roles: Admin, User)
// When values are more meaningful with names than just numbers/strings.
// For status codes, directions, modes, etc.

// ----------------
// Numeric Enum (default starts at 0)
// ----------------
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0 (because Up = 0 by default)

enum Role {
  User = 1,
  Admin, // 2
  SuperAdmin, // 3
}

console.log(Role.User); // 1
console.log(Role.SuperAdmin); // 3

// ----------------
// String Enum
// ----------------
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING",
}

let res: Status = Status.Success;
console.log(res); // "SUCCESS"

// ----------------
// Heterogeneous Enum (number + string)
// ----------------
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No); // 0
console.log(Mixed.Yes); // "YES"

// ----------------
// Using Enums in Functions
// ----------------
function respond(status: Status): void {
  if (status === Status.Success) {
    console.log("✅ Success!");
  } else if (status === Status.Error) {
    console.log("❌ Error!");
  } else {
    console.log("⏳ Pending...");
  }
}

respond(Status.Success); // ✅ Success!

// ================================
// 📌 Summary Table
// ================================
//
// | Concept              | Example                               |
// |-----------------------|---------------------------------------|
// | Numeric Enum          | enum Direction { Up, Down, Left, Right } |
// | Custom start value    | enum Role { User=1, Admin, SuperAdmin } |
// | String Enum           | enum Status { Success="SUCCESS", ... } |
// | Mixed Enum            | enum Mixed { No=0, Yes="YES" }        |
// | Function with Enum    | function fn(s: Status) {}             |
//

// ✅ Quick Understanding:
// Enums give friendly names to numbers or strings.
// Numeric Enums auto-increment, String Enums must be set explicitly.
// Useful for directions, roles, statuses, modes, etc.
