const accountId = 144553
let accountEmail = "anand@gmail.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

accountEmail = "Ar@gmail.com"
accountPassword = "1234"
accountCity = "delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);