const accountId = 1234
let accountEmail = "ag@gmail.com"
var accountPass = "09876"
accountCity = "Raipur"

accountEmail = "dsf@gmai.com"
accountPass = "7654"
accountCity = "Bengaluru"

let accountState;
/*
Prefer not to use var
because of issue in block scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])