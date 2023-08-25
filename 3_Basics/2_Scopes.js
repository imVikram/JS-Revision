//var c =300

let a=400
let c=400

// {} ==> scope
if (true) {
    let a=10
const b=20
 //c=30
 console.log("inner: ", a);
}

// console.log(a);
// console.log(b);
console.log(c);
