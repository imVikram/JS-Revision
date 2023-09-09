// //Old way of getter & setter


// function User(email,password) {
//     this._email = email;
//     this._password = password
// }

// Object.defineProperty(this, 'email',{
//     get: function (){
//         return this._email.toUpperCase()
//     },
//     set: function(value){
//         this._email = value
//     }
// })

// Object.defineProperty(this, 'password',{
//     get: function (){
//         return this._password.toUpperCase()
//     },
//     set: function(value){
//         this._password = value
//     }
// })

// const Vik = new User("Vikram@singh.com", "Vikram")
// console.log(Vik.email);

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const vik = new User("Vik@google.com", "google")

console.log(vik.email);
