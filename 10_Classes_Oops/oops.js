const user = {
    usrName : 'Vikram',
    loginCOunt:7,
    signIn : true,

    getUserDetails : function () {
        console.log('Got user details from DB');
        console.log(`userName is : ${this.usrName}`);
        //console.log(this);
    }
}

// const user2 = {
//     usrName : 'Vikram Singh',
//     loginCOunt:17,
//     signIn : false,

//     getUserDetails : function () {
//         console.log('Got user details from DB2');
//         console.log(`userName is : ${this.usrName}`);
//         //console.log(this);
//     }
// }

// console.log(user);
// console.log(user.usrName);
// console.log(user['signIn']);
// console.log(user.getUserDetails());
// console.log(this);//{}  (becasue of global scope)


//========Constructor Function============
// const promiseOne = new Promise()
// const myDate = new Date()

function User(userName,loginCount, isLoggedIn) {
    this.usrName = userName,
    this.loginCOunt = loginCount,
    this.signIn = isLoggedIn

    return this

}

const userOne = User('Manvik','11',false)
console.log(userOne);