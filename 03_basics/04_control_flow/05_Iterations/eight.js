const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);

//     return acc+currval
// },0);


const myTotal = myNums.reduce((acc, currval) => (
    acc + currval
), 0);


const shoppigCart = [
    {
        itemName: "js course",
        price: 599

    },
      {
        itemName: "mobile dev course",
        price: 1299

    } , {
        itemName: "python course",
        price: 799

    } , {
        itemName: "data science course",
        price: 1199

    }
]

const totalPrice = shoppigCart.reduce((acc,item)=>(
    acc+item.price
),0)
// console.log(myTotal);

console.log(totalPrice)
