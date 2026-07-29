// const userEmail = "nitish23@gmail.com";

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


// falsy value

// false, 0,-0,BigInt 0n, "",null,undefined,NaN

// truthy values
// "0", 'false'," ",[],{},function(){} 

const userEmail = [];
if(userEmail.length ===0){
    console.log("Array is empty")
}


const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
 console.log("Object is empty");
}


// Nullish coaleshing operator 

let val1;

// val1 = 5 ??10;
// val1 = null??10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 10
console.log(val1);
// console.log(val1);


// Terninay operator 

// condition ?? true : false

const iceTeaPrice = 100;
iceTeaPrice<=90 ? console.log("Less than equal tto 90") : console.log("Greater than 80");




