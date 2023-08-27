//Immediately invoked function expression IIFE

//Syntax
// (function (){});

// function one() {
//     console.log(`DB Connected`);
// }

// one()

//++++++IIFE+++++++

// (function one() {
    //named IIFE
//     console.log(`DB Connected`);
// })();//make sure to semicoln to end its context
//in case we want to write 2 IIFE on single file 
//and we forget to add semicolumn at the end of the 1st IIFE, it wont execute

//Arrow finction way to write IIFE
( (name) => {
    //un-named IIFE
    console.log(`DB Connected ${name}`);
})('by Vikram')


