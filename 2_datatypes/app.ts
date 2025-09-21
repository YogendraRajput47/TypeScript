// Basic types
// ->Primitive types: boolean, number, string
// ->Any,Unknown,Void,Null,Undefined, Never,
// ->Arrays,Objects
// ->Tuples
// ->Enums

// 1. number
// Represents all kinds of numbers: integers, floats, hexadecimal, binary, and octal.

let age: number = 25;
let price: number = 99.99;
let hex: number = 0xfff; // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744; // octal

// 2.string
// Represents text values.

let firstName: string = "John";
let message: string = `Hello, my name is ${firstName}`;

//3.boolean
// Represents true/false values.
let isActive: boolean = true;
let isCompleted: boolean = false;

// 4.null & undefined
// These are their own types.
// Useful when strict null checks are enabled.
let nothing: null = null;
let notAssigned: undefined = undefined;

// 5.any
// Allows any type (turns off type checking).
// Not recommended unless necessary.

let randomValue: any = "Hello";
randomValue = 10; // valid, but unsafe
randomValue = true; // still valid

// 6.unknown
// Safer alternative to any. You must check the type before using it.
let input: unknown = "TypeScript";
if (typeof input === "string") {
  console.log(input.toUpperCase()); // safe
}

//7.void
// Represents "no value". Commonly used as a return type for functions.

function logMessage(): void {
  console.log("This function returns nothing");
}

// 8.never
// Represents a value that never occurs.
// Used in functions that throw errors or never finish executing.

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}


// 9.object
// Represents non-primitive types (arrays, objects, functions, etc.).
let person: object = { name: "Alice", age: 30 };


// 10.array
// Represents a collection of elements of the same type.
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob"]; // generic syntax
