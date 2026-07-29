// for(let i = 0;i<10;i++){
//     console.log(i);
// }



// for(let i = 0;i<10;i++){
//     console.log(`Outer loop value: ${i}`)
//     for(let j = 0;j<10;j++){
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

let myArray = ["flash","batman","superman"];
for(let index = 0;index<myArray.length;index++){
    console.log(myArray[index]);
}

// break and continue

for(let i = 1;i<=20;i++){
    // if(i==5){
    //     break;
    // }

    if(i==5){
        continue;
    }
    console.log(`Value of i is ${i}`);
}