const accountId = 14455
let  accountEmail = "nitish@google.com"
var accountPassword = "2345"
accountCity = "Jaipur"


// accountId  = 2 // Not allowed

accountEmail = "gupta@gmail.com";
accountPassword = "23432";
accountCity = "Bengaluru"

let accountState;

console.log(accountId);



/* Prefer not to use var 
Because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
