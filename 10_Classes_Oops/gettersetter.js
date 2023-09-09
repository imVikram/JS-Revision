class User{
    constructor(email,password){
        this.email =email
        this.password = password
    }

    //==========Get SETter=============
    //getter will return something evrtime and setter will be assigning value
    //email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    //password
    get password(){
        return `${this._password}Vikram`
    }
    set password(value){
        this._password = value
    }
}

const Vikram = new User("Vikram@SIngh.ai",'12345aBc')
console.log(Vikram.password);