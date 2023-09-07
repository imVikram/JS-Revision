//ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email=email;
        this.password=password
    }

    enryptPassword(){
        return `${this.password}abc`
    }

    capitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Vik = new User("Vikram Singh","Vik@google.com","123")
console.log(Vik.enryptPassword());
console.log(Vik.capitalUsername());

/*BEHIND THE SCENES
we could have used prototypes if there was no classes available.
*/