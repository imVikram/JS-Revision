

function sayMyName() {
    console.log("V");
console.log("i");
console.log("k");
console.log("r");
console.log("a");
console.log("m");
}
// sayMyName()

// function addTwoNum(number1,number2) {
    
//     console.log(number1 + number2);
// }

function addTwoNum(number1,number2) {
    
    return (number1 + number2);
}

//addTwoNum()//Nan
//addTwoNum(2,4)//6
//addTwoNum(2,"4")//24

const result =addTwoNum(2,1)
// console.log("Result: ",result);

function loginUser(username="Manvik") {
    if (username===undefined) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`
    
}
//console.log(loginUser("Vikram"));

// console.log(loginUser());


//Normal function
// function calculateCartPrice(num1) {
//     return num1
    
// }
// console.log(calculateCartPrice(2,3,4));///2

//Rest operator
// function calculateCartPrice(...num1) {
//     return num1
    
// }
// console.log(calculateCartPrice(2,3,4));///[ 2, 3, 4 ]

function calculateCartPrice(value1, value2, ...num1) {
    return num1
    
}
// console.log(calculateCartPrice(2,3,4,5));

const user ={
    username:"Mr. Vikram",
    price:"7 crore",
    userCar:"Mercedes"
}

function handleObject(anyobject){
console.log(`user ${anyobject.username} is driving ${anyobject.userCar} and price is ${anyobject.price}`);
}

handleObject(user)



