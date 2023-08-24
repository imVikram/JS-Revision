

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

console.log(loginUser());



