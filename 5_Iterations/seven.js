//==========Reduce=============

const arr = [1,2,3,4,5]

// const arrNew = arr.reduce( function (acc, currval) {
//     console.log(`${acc} acc and currval is ${currval}`);
//     return acc + currval
// }, 2)


//Arror fn way
// const arrNew = arr.reduce(  (acc, currval) =>  acc + currval, 0)
// console.log(arrNew);  

//shopping cart
const shoppingCart = [
    {
        itemName:"Java",
        price:599
    },
    {
        itemName:"JS",
        price:299
    },
    {
        itemName:"C#",
        price:799
    },
    {
        itemName:"Swift",
        price:599
    }
]

const priceTotal =shoppingCart.reduce((acc, item)=> acc + item.price ,0)
console.log(priceTotal);