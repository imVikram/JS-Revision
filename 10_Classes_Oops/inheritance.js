class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const Vik = new Teacher("Vikram singh","Email.com","1234")
Vik.addCourse()

const Manvik = new User("Manvik Chaudhary")
//Manvik.addCourse()

Manvik.logme()
console.log(Vik===Manvik);//false