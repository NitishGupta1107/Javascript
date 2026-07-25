
function sayMyName(){
    console.log("Nitish");
}

sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }

function addTwoNumbers(number1,number2){
  let result = number1 + number2;
return result;

}

// addTwoNumbers(2,4)
// addTwoNumbers(2,"Nitish");

const result = addTwoNumbers(2,3);
console.log(result);

function loginUserMessage(username="Nitish"){  // Default value Nitish given to the function is nothing is being passed in the argument
  if(username===undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`
}

// let message = loginUserMessage("Nitish");
// console.log(message);

console.log(loginUserMessage("Nitish"));