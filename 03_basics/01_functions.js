
// function sayMyName(){
//     console.log("Nitish");
// }

// sayMyName();

// // function addTwoNumbers(number1,number2){
// //     console.log(number1+number2);

// // }

// function addTwoNumbers(number1,number2){
//   let result = number1 + number2;
// return result;

// }

// // addTwoNumbers(2,4)
// // addTwoNumbers(2,"Nitish");

// const result = addTwoNumbers(2,3);
// console.log(result);

// function loginUserMessage(username="Nitish"){  // Default value Nitish given to the function is nothing is being passed in the argument
//   if(username===undefined){
//     console.log("Please enter a username");
//     return
//   }
//   return `${username} just logged in`
// }

// // let message = loginUserMessage("Nitish");
// // console.log(message);

// console.log(loginUserMessage("Nitish"));




// function calculateCartPrice(num1){

//     return num1;
    
// }
// console.log(calculateCartPrice(2))


// function calculateCartPrice(val1,val2,...num1){ // Rest operator
//     return num1
// }


// console.log(calculateCartPrice(23,45,56,200)) // this will give array of the given arguments 

const user = {
    username:"Nitish",
    age:23
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);

// Passing the object in the function
handleObject({
    username:"Satyam",
    age:23
})


//Passing the array in the function

const myNewArray = [200,400,234];

function returnSecondValue(getArray){
 return getArray[1];
}

console.log(returnSecondValue(myNewArray));