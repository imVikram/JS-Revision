const user ={
    userName:"Vikram",
    price:999,

    welcomeMessage : function () {
        console.log(`Welcome ${this.userName}, you have paid ${user.price}, thank you!`);
        //console.log(this);
    }

}

// user.welcomeMessage()//Welcome Vikram
// user.userName ="Sam"
// user.welcomeMessage()//Welcome Sam
//console.log(this);

//user.welcomeMessage()

//+++++++++Arrow++++++++++++++

// function one() {
//     let username = "VikramSingh"
//     console.log(this.userName);//undefined
// }
// one()

// const one = function() {
//     let username = "VikramSingh"
//     console.log(this.userName);//undefined
// }
// one()

// const one = () => {
//     let username = "VikramSingh"
//     console.log(this.userName);//
// }
// one()

// const addTwo =(num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5,6));


//Implicit return
// const addTwo1 =(num1, num2) => num1 + num2
// console.log(addTwo1(5,6));//11

const addTwo2 =(num1, num2) => (num1 + num2)
console.log(addTwo2(5,6));//11

