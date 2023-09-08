class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const HiVikram = new User('Vikram')
//console.log(HiVikram.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher('iphone 13', 'iphone.com')
console.log(iphone.createId()); //wont allow because of static keyword