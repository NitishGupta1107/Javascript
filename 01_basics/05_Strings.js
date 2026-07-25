const name = "Nitish"
const repoCount = 50

// console.log(name+repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Nitish-Ramakant-Gupta')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.slice(0,4);
console.log(newString);

const anotherString  = gameName.slice(-3,6);
console.log(anotherString);

const newStringOne = "  nitish  ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://nitish.com/nitish%20gupta";


const newUrl = url.replace('%20',"-");
console.log(url);
console.log(newUrl);

console.log(newUrl.includes("nitish"));


console.log(gameName.split("-"))












