// ================================
// 📌 TypeScript - Intersection Types
// ================================

//
// An Intersection Type (&) combines multiple types into ONE.  
// The resulting type must have *all* the properties of the types it combines.

// ----------------
// Basic Example
// ----------------

type Person4={name:string};
type Employee={employeeId:number};

type Staff=Person4 & Employee;

let staffMember:Staff={
    name:"Alice",
    employeeId:101
}

// ----------------
// With More Properties
// ----------------

type Contact={email:string};

type EmployeeDetails = Person4 & Employee & Contact;

let emp:EmployeeDetails={
    name:"Alice",
    employeeId:101,
    email:"alice@example.com"
};


// ----------------
// Intersection with Unions
// ----------------

type A = { a: number };
type B = { b: string };
type C = { c: boolean };

type AB = A & B; // must have both a and b
type ABC = A & B & C; // must have a, b, and c

let obj: ABC = { a: 1, b: "hello", c: true };

// ----------------
// Real-World Example
// ----------------

type ErrorHandling={
    success:boolean,
    error?:string;
}

type DataResponse={
    data:string[];
}


type ApiResponse = ErrorHandling & DataResponse;

let response: ApiResponse = {
  success: true,
  data: ["user1", "user2"],
};


// ================================
// 📌 Summary Table
// ================================
//
// | Concept               | Example                               |
// |------------------------|---------------------------------------|
// | Basic Intersection     | type Staff = Person & Employee       |
// | Combine many types     | type All = A & B & C                 |
// | Object with all props  | let obj: A & B = {a:1, b:"hi"}        |
// | Real-world API         | type ApiResponse = Error & Data       |
//

// ================================
// 📌 Summary Table
// ================================
//
// | Concept               | Example                               |
// |------------------------|---------------------------------------|
// | Basic Intersection     | type Staff = Person & Employee       |
// | Combine many types     | type All = A & B & C                 |
// | Object with all props  | let obj: A & B = {a:1, b:"hi"}        |
// | Real-world API         | type ApiResponse = Error & Data       |
//

