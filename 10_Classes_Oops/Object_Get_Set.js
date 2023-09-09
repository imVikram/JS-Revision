const User={
    _email:'Vikram@microsoft.com',
    _Password:12345,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
            this._email = value
        }
}


const Vik = Object.create(User)
console.log(Vik.email);