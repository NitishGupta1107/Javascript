// for of loop

// ["","",""]
// [{},{},{}];


const arr = [1,3,5,6,8];

for(const num of arr){
console.log(num);

}

const greetings = "Hello world!";

for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map();
map.set('IN',"India")
map.set('US',"United States of America");
map.set('Fr',"France");
map.set('IN',"India") // Maps only take the unique values it will not duplicate 


for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key,':',value);
}

const myObj = {
    'game1':'NFS',
    'game2':'Spiderman'
}

for(const key of myObj){
    console.log(key);
}



// console.log(map);