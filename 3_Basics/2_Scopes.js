//var c =300

let a=400
let c=400

// {} ==> scope
if (true) {
    let a=10
const b=20
 //c=30
 //console.log("inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

//=========Nested Functions========

function one() {
    const username = "vikram"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    //two()
}

//one()

//===========if else function=======

// if (true) {
//     const username = "admin"
//     if (username==="admin") {
//         const website = " youtube"
//         console.log(username + website);
        
//     }
//     //console.log(website);
// }
// //console.log(username);

//+++++++Interesting++++++++++++

console.log(addOne(5));
function addOne(value) {
    return value + 1;

}

//===========Hoisting============

onsole.log(addTwo(5));//error because of its declaration type

//sometimes we can use it as
const addTwo =  function (num) {
    return num + 2;
    
}
c


