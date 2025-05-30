let score = "33abc" 

console.log(typeof score)
// 2nd type of syntax
// console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber);
// string can't be converted to number so it prints NaN
//true => 1 false => 0

let login = ""
let boolean_login = Boolean(login)
console.log(boolean_login);

// empty string => false
// string => true