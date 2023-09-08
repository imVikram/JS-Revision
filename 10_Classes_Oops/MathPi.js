//==========Disable/Enable properties==========
//Object.getOwnPropertyDescriptor

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);//5

const vik ={
    name :'ginger chai',
    price: 249,
    isAvailable :true
}



// Object.defineProperty(vik,'name',{
//     writable:false,
//     enumerable:false
// })//disable its property
// console.log(Object.getOwnPropertyDescriptor(vik, 'name'));

for (let [key, value] of Object.entries(vik)) {
    console.log(`${key}: ${value}`);
    
}

