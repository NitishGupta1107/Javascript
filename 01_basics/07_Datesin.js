// let myDate  = new Date();

// console.log(myDate.toString());
// // console.log(myDate.toLocaleDateString("en-IN"));
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate);

// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to conver the millisecond into seconds

let newDate = new Date();
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",

})













