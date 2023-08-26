const userEmail1 = "vik@contra.ai"


// //truthy value
//"0",'false',"false"," ",[],{},function(){}, 
// if (userEmail1) {
//     console.log("Email found");
// }
// else{
//     console.log("not found");
// }



// //++++++++++Falsy++++
// false,0,-0, Bigint 0n, "", null, undefined, NaN
 const userEmail = ""


//falsy value
if (userEmail) {
    console.log("Email found");
}
else{
    console.log("not found");
}

if (userEmail.length===0) {
    console.log("Array emtpy");
}

// const emoptyObj = {}

// if (Object.keys(emoptyObj).length===0) {
//     console.log("object is empty");
// }

// if (false===0) {
// console.log("Woww");    
// }

//Nullish caolescing operator (??) : null undefined
let val1;
// val1 = 50 ?? 10 
val1 = null ?? 10
val2 = undefined ?? 100
val3 = null ?? 10 ?? 20
console.log(val1);
console.log(val2);
console.log(val3);

//++++++++++++++++++ternary++++++++++++
//condition ?true:false
const a=10;
a > 5 ? console.log("greater than 5") : console.log("less than 5");;


