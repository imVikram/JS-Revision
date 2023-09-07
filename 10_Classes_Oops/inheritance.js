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

const Vik = Teacher("Vikram singh","Email.com","1234")
