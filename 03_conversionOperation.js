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

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let str1 = "Hello"
let str2 = "Aaryan"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true); //this gives the value of true in number
console.log(+""); // this gives the value of empty string in number