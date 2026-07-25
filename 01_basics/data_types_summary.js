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


// Memory in js

// Stack,Heap

// Primitve uses Stack
//Non primitive data Types use Heap memory

let myName = "Nitish gupta"

let anothername = myName;
anothername = "Satyam"

console.log(myName);
console.log(anothername);

// Whatever the things declared in stack is being passed as a copy // like call by value

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}


let userTwo = userOne;
// Here userTwo will take the reference of the Userone and can directly manipulate the userone

userTwo.email = "nitish@google.com";

console.log(userOne.email);
console.log(userTwo.email);




//Non primitive data types goes in the heap and can be taken as reference


