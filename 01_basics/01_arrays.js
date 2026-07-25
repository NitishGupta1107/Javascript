// Array

const myArr = [0,1,2,3,4,5,6];

const myHeros = ["Shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

// const newArr = myArr;

// newArr[0] = 2;
// console.log(newArr[0]);
// console.log(myArr[0])


// Array methods

// myArr.push(7)
// console.log(myArr);

// myArr.pop();
// console.log(myArr)

// myArr.unshift(0);
// console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(0));


const newArr = myArr.join();
console.log(myArr);
console.log(newArr);// Same value as myArr but it will return in string format

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1)