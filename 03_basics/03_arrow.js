const user = {
    username: "Nitish",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this)

    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username = "Nitish";
//     console.log(this.username); // Will give undefined can't use this inside the function 
//  }


// chai();


// const chai = function(){
//     let username = "Nitish"
//     console.log(this.username); // Will give undefinend
// }

// chai();

// const chai = () => {
//     let username = "Nitish"
//     console.log(this.username); // will give undefined
//     console.log(this)
// }

// chai();


// const addTw0 = (num1, num2) => {
//     return num1 + num2

// }

// const addTw0 = (num1, num2) =>   num1 + num2


  


// const addTw0 = (num1, num2) =>(num1 + num2)
// const addTw0 = (num1, num2) =>({username:"Nitish"})


    



// console.log(addTw0(3, 5));

const myArray = [23,5323,234,234];
