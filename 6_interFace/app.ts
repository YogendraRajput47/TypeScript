// ================================
// 📌 TypeScript - Interfaces
// ================================
//
// 👉 Interfaces define the **shape of objects**.
// They are like contracts: objects that implement an interface must follow its structure.

// ----------------
// Basic Interface
// ----------------

interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "Alex",
  age: 21,
};

// ----------------
// Optional Properties
// ----------------
interface Car {
  brand: String;
  model: string;
  year?: number; //optional
}

let myCar: Car = {
  brand: "Scarpio",
  model: "S11",
};

// ----------------
// Readonly Properties
// ----------------
// 🔹 What does readonly mean?
// When a property is marked readonly, you can only set it once, usually when the object is created.
// After that, trying to change it will cause a TypeScript error.
// This is useful to prevent accidental changes to important data.

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 15; // ❌ Error: x is readonly


// ----------------
// Function in Interface
// ----------------
// This is a function interface.
// It doesn’t describe an object, it describes a function signature.
// Any function assigned to Calculator must:
// Take two numbers as arguments (a and b)
// Return a number

interface Calculator{
    (a:number,b:number):number;
}

const add:Calculator=(x,y)=>x+y;
const multiply: Calculator = (x, y) => x * y;

// 🔹 Step 3: What would cause an error?
// const wrong: Calculator = (a, b) => a.toString() + b.toString();
// ❌ Error: must return a number, not a string


interface User{
    name:string;
    email:string;
    password:string;
    gender?:string;
}

function getDataOfUser(obj:User):void{
    console.log(obj.email);
    console.log(obj.name);
    console.log(obj.password);
}

let user1:User={
    name:"Alex carry",
    email:"alex@example.com",
    password:"alex@123"
};

getDataOfUser(user1);



// ----------------
// Extending Interfaces
// ----------------

interface Animal{
    name:string;
}

interface Dog extends Animal{
    breed:string,
}

let myDog:Dog={
    name:"Charlie",
    breed:"Labrador"
}

// ----------------
// Index Signatures
// ----------------

interface StringArray{
    [index:number]:string;
}

// This means:
// Any number index of this object/array will have a string value.
// Think of it like telling TypeScript:
// “This is an array (or object) where every numeric key maps to a string.”

// 🔹 Step 1: Assigning an array
let fruits: StringArray = ["apple", "banana", "orange"];


// fruits[0] → "apple" ✅
// fruits[1] → "banana" ✅
// fruits[2] → "orange" ✅
// TypeScript checks that all values are strings.

// 🔹 Step 2: Using the index

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

// 🔹 Step 3: Invalid assignment ❌
// fruits[1] = 42; 
// ❌ Error: Type 'number' is not assignable to type 'string'



// 🔹 Example: Object with numeric keys

interface Scores {
  [studentId: number]: number; // numeric keys → number values
}

let examScores: Scores = {
  101: 95,
  102: 88,
  103: 76,
};

console.log(examScores[101]); // 95
console.log(examScores[103]); // 76

// 🔹 Key Points
// [studentId: number]: number → any numeric key in this object must map to a number.
// You can add new keys dynamically:

examScores[104] = 82; // ✅ works
// examScores[105] = "A+"; // ❌ Error: must be a number


//Interface with same name get merged
interface Abcd{
    name:String;
}
interface Abcd{
    email:string;
}

function getData(obj:Abcd){
    console.log(obj.name);
    console.log(obj.email);
}




// ================================
// 📌 Summary Table
// ================================
//
// | Feature                  | Example                                    |
// |--------------------------|--------------------------------------------|
// | Basic Interface          | interface Person { name: string; age: number } |
// | Optional Property        | year?: number                              |
// | Readonly Property        | readonly x: number                          |
// | Function Interface       | interface Calc { (a:number,b:number):number } |
// | Extending Interface      | interface Dog extends Animal { breed:string } |
// | Index Signature          | [index:number]: string                      |
//