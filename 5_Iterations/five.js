const coding = ["java","C#", "Javascript","rust","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

//Arrow function approach to write it
// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


//foreach has access to all value of defined array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding =[
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "C#",
        langFileName : "cs"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "python",
        langFileName : "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.langFileName);
})