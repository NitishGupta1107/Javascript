const coding = ['js','ruby','java','python','cpp'];

// coding.forEach((item)=>{
//    console.log(item);
// })


// function printme(item){
//     console.log(item);
// }


// coding.forEach(printme);


// coding.forEach((item,index,coding)=>{
//     console.log(coding);
//     console.log(`Item at index${index} is ${item}`);

// })

const mycoding = [
    {
        languageName:"Javascript",
        languageFileName:"js",
    },
     {
        languageName:"Java",
        languageFileName:"java",
    },
     {
        languageName:"python",
        languageFileName:"py",
    }
];


mycoding.forEach((item)=>{
    console.log(item?.languageName);
    console.log(item?.languageFileName);
})