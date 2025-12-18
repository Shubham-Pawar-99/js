// premitive data => stack memory
let a = 10;
let b = a; // copy by value

// nonpremitive data => heap memory

let obj1 = { name: "shubham", age: 24 };
let obj2 = obj1; // copy by reference
obj2.name = "rahul";

console.log(obj1);
console.log(obj2);
