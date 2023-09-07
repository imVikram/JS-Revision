// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// const promiseOne = new Promise(function (resolve, reject){
//     //Async task
//     //DB calls
//     //Network Calls
//     //File reading
//     setTimeout(function (){
//         console.log('Async task completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

// new Promise(function (resolve ,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function (){
//     console.log('Async 2 resolved');
// })

//=============third==========
// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(function (){
//         resolve({
//             userName :'Vikram',
//             email:'Me@email.com'
//         })
//     },1000)
// })
// //passing values
// promiseThree.then(function(user){
//     console.log(user);
// })


//=======Four==========

// const promiseFour = new Promise(function (resolve, reject){
//     setTimeout(function (){
//         let error = true
//         if (error) {
//             resolve({
//                 userName : 'Vikram ji',
//                 password:123456
//             })
//         }else{
//             reject('Error: Something went wrong')
//         }
//     },2000)
// })

//  promiseFour.then((user) => {
//     console.log(user.userName)
//  return user.userName;
// }).then((userName) =>{
// console.log(userName);
// }).catch(function (error){
//     console.log(error);
// }).finally(() => console.log('the promise is either resolved or rejected'))

//++++++++++++FIVE+++++++++++

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         let error = true
//         if (!error) {
//             resolve({
//                 userName : 'Vikram Singh',
//                 password:123456
//             })
//         }else{
//             reject('Error: Javascript went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//  try {
//     const response = await promiseFive
//     console.log(response);
//  } catch (error) {
//     console.log(error);
//  }
// } 
// consumePromiseFive()

//=========== FETCH ================

fetch('https://api.github.com/users/imVikram')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})