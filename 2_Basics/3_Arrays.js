const TMKUC = ["Jetha","Babita","Aiyer"]
const ramayan = ["Ram","Site","Lakshman","Hanuman"]

// TMKUC.push(ramayan)
// console.log(TMKUC);
// console.log(TMKUC[3][1]);


//++++++++++++CONCAT+++++++++++++++
// const newArray = TMKUC.concat(ramayan)
//console.log(TMKUC);
// console.log(newArray);


//========SPREAD===============
// const allCharater = [...TMKUC, ...ramayan]
// console.log(allCharater);

// //============flat==============
// const anotherArray = [1,2,3,[4,5,6],7]
// const realArray = anotherArray.flat(Infinity)
// console.log(realArray);


//==============FROM===========
// console.log(Array.isArray("Vikram"));
// console.log(Array.from("Vikram"))

//======value to array=============
let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));