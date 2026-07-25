// singleton 


// object literal


const mySym = Symbol("key1")
const jsUser = {
    name:"Nitish",
    "full name":"Nitish gupta",
    [mySym]:"myKey1", // square bracket is used if we want to declare symbol
    age:23,
    location:"Mumbai",
    email:"gupta@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],


}




// console.log(jsUser)
// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym])

jsUser.email = "nitish.r.gupta@slrtce.in"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());