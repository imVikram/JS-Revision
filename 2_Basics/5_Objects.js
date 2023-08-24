const tinderUser = new Object()
tinderUser.id = "ABC123"
tinderUser.name ="Sammy"
tinderUser.isLogged = false


const regularUser = {
    email:"Vikram@test.com",
    fullName:{
        firstName:"Vikram",
        lastName:"Singh"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName);

//=========Concat Objects==============
const obj1 = {1:"a",2:"B"}
const obj2 = {3:"c",4:"D"}
//const obj3 = {obj1,obj2}//problems
//const obj3 = Object.assign({}, obj1,obj2)//nice
const obj3 = {...obj1, ...obj2}//Best method(spread operator)
// console.log(obj3);


//===========Db example=========
const users = [
    {
        id :1,
        email:"mail1"
    },
    {
        id :2,
        email:"mail2"
    },
    {
        id :3,
        email:"mail3"
    }
]

console.log(users[1].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser));