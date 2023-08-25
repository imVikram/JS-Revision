const user ={
    userName:"Vikram",
    price:999,

    welcomeMessage : function () {
        console.log(`Welcome ${this.userName}`);
        //console.log(this);
    }

}

// user.welcomeMessage()//Welcome Vikram
// user.userName ="Sam"
// user.welcomeMessage()//Welcome Sam
console.log(this);