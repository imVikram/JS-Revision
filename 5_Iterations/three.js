//for of

// ["","",""]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//    console.log(num);
// }

// const greetings = "hello world"
// for (const num of greetings) {
//     console.log(`this is letter: ${num} `);
//     //prints each letter of string with spaces 
// }

//Maps
const map = new Map()
map.set('IN','India');
map.set('US','USA');
map.set('EN','UK');
map.set('U','Europe');

// console.log(map);
for (const [Key, Value] of map) {
    console.log(Key + '----> ' + Value);
    
}
