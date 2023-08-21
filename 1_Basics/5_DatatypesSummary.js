//**Objects & Event listeners are most importatnt  */

//***********Primitive**** */

//7n types:(call by value)//
//string,Number,boolean,null,undefined,Symbol,BigInt

// const score =100.3
// console.log(score);

// const id =Symbol('123')
// const Anotherid =Symbol('123')

// console.table([id,Anotherid]);
// console.log(id===Anotherid);//false

//***Reference type(Non Primitive) ****/
//Array,Objects,Functions
// const heros=["shaktiman","naagraj","doga"]
// console.log(heros.length);

// let myObj = {
//     name:"vikram",
//     age :"20"
// }
// console.log(myObj);

// const myFunc = function(){
// console.log("Hey boy");
// }

// console.log(typeof(myFunc));

//+++++++++++++++++++++++++++++++++++++++++++++

//Slack(Primitve)     //Heap(Non-primitive)

// let MyChannel  ="imVikram"

// let anotherName = MyChannel
// anotherName = "ManvikJi"
// console.log(MyChannel);
// console.log(anotherName);

// let userOne={
//     email:"mail@me.com",
//     name:"vikram"
// }

// let userTwo = userOne
// userTwo.email="Manvik@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);