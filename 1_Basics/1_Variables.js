const accountId= 1232
let accountEmail = "Vikram@maiVik.com"
var accountPassword = "12345" //No Scoping hence not recommended to use
accountCity = "Delhi" //without define its type we can assign value directly
let accountState; //if we dont define any value then it will be considred as 'undefined'

//accountId = 2 //Not allowed since its a constant
//console.log(accountId);

accountEmail = "Manvik@test.com"
accountPassword = "54321"
accountCity = "Bangaluru"

//log all at once
console.table([accountEmail,accountPassword,accountCity,accountState]);