function setUsername(username){
    //complex DB call ongoing here
    console.log('method called');
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email=email
    this.password = password
}

const vikram = new createUser("tea", "tea@email.com", 123)
console.log(vikram);