// let myName="Vikram"
// console.log(myName.length);//6

// let myName="Vikram     "
// console.log(myName.trim().length);//11 


//========to achieve==========
let myName="Vikram     "
console.log(myName.trueLength);//11 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spierman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spierman}`);
    }
}
Object.prototype.Vikram = function(){
    console.log('Vikram is present in all objects');
}

/*Now all types having power which was injected through object prototype */
//heroPower.Vikram()//Vikram is present in all objects
//myHeros.Vikram()//Vikram is present in all objects

/*let check if we inject the power in array, Object will have that?*/

Array.prototype.HeyVikram = function(){
    console.log('Vikram Says hello');
}

// myHeros.HeyVikram()
// heroPower.HeyVikram()


//--------INHERITANCE---------------
const User={
    name : "Vikram SIngh",
    email : "Google.com"
}
const teacher = {
    makevideo: true
}

const techingSupport ={
    isAvailable : false
}

const TASupport={
    makeAssesment : 'JS assignment',
    fullTime : true,
    __proto__ : techingSupport
}

teacher.__proto__ = User

//-----------Modern Approach-----------

Object.setPrototypeOf(techingSupport, teacher)


let anotherUsername = "Vikram Ji     "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
   
}

anotherUsername.trueLength()
"iceTea".trueLength()