// // const tinderUser = new Object();

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Nitish gupta"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email:"gupta@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Nitish",
//             lastname:"gupta"
//         }
//     }
// }


// console.log(regularUser.fullname.userfullname.firstname);


// const obj1 = {1:"a",2:"b"}
// const obj2  = {3:"c",4:"d"}

// // const obj3 =  Object.assign(obj1,obj2)

// // const obj3 = Object.assign({},obj1,obj2) // Much bettter way to assign the value 

// const obj3 = {...obj1,...obj2};
// console.log(obj3);


// const users = [
//     {
//         id:1,
//         name:"Nitish gupta"

//     },
//     {
//         id:2,
//         name:"Satyam jha"
//     },
//     {
//         id:3,
//         name:"Shivam gupta"
//     }
// ]

// console.log(users[0].name)


// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename:"Javascript",
    price:"999",
    courseInstructor:"Nitish"
}

// course.courseInstrurctor;

const{courseInstructor} = course;  // Destructing the courseInstructor from the course
const{courseInstructor:instructor} = course // Can use the instructro variable inplace of courseInstructor

// console.log(courseInstrurctor);
console.log(instructor);

console.log(courseInstructor);

