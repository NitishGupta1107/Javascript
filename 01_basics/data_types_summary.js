// Primitive data types

// 7 types : String ,Number, Boolean,null ,undefined,Symbol ,BigInt

const score = 100;
const scoreValue = 10.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId)

// const bigNumber = 10000394959555995n; // Put n in the last 




// Reference types or Non Primitive data types

// Arrays ,Objects, Functions

// Array
const heros = ["Shaktiman","Bheem","Balveer"];
console.log(typeof(heros));

// Object

const obj = {
    name:"Nitish",
    age:22,

}
console.log(typeof(obj))

// Function

const myFunction = function (){
  console.log("Hello world");
  
}

console.log(typeof(myFunction))