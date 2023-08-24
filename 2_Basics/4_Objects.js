//Singleton
//Object.create


//object litrals
const mySym = Symbol("Testkey1")

const Juser={
    name:"Vikram",
    "fulName":"Vikram Singh",
    age:18,
    [mySym]:"testKey2",
    location:"Noida",
    email:"vikram@google.in",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]

}
// console.log(Juser["email"]);
// console.log(Juser["fulName"]);
// console.log(Juser.fulName);
// console.log(Juser[mySym]);///Syntax of using symbol

// Juser.email="Vikram@yahoo.com"
// console.log(Juser.email); 

//+++++++++FREEZE++++++++++
//Object.freeze(Juser)///to freeze object
// Juser.email="Vikram@Test.com"
// console.log("====AFTER FREEZE+++"); 
// console.log(Juser.email); 
// console.log(Juser); 

//Add function in object
Juser.greetings = function(){
    console.log("Hello JS Champ");
}

Juser.greetingsTwo = function(){
    console.log(`Hello JS Champ, ${this.name}`);
}

console.log(Juser.greetings());//[Function (anonymous)]
console.log(Juser.greetingsTwo());//Hello JS Champ
