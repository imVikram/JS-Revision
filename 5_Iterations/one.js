//for
//Syntax
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log('best number found');
//     }
//     console.log(element);
// }


//Inner looping
// for (let index = 0; index < 3; index++) {
//     console.log(`Outer loop: ${index}`);
//     for (let j = 0; j < 3; j++) {
//         //console.log(`inner loop: ${j} and outer loop ${index}`);
//         console.log(index + "*" + j + ' = ' + index * j);
//     }
// }

//break and continue

//break
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log('5 best number found');
//         break;
//     }
//     console.log(`value of i is: ${index} `);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log('5 best number found');
        continue;
    }
    console.log(`value of i is: ${index} `);
    
}//does not include itsn current iterartion