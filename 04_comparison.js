console.log("2">1); //it converts string 2 to number
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0); // true because comparisons convert null to a number 0 

// === Strict check checks value and datatype both
console.log("2"===2);
//this doesn't convert "2" => 2

//datatypes summary
/* JS is a dynamic type language as defining datatype of each variable is not required as in Java,c++ etc.
*/

//Declaring a symbol() : to make a variable unique
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

//Big Int
const bigNumber = 34576756543257685n

//Reference (non primitive)
//typeof of non primitive datatype are objects 
// except for Function it is function only

// Arrays,Objects,Functions

//Array
const heroes = ["IronMan","Spiderman","Thor"]

//Objects : Key Value Pairs
let myObj = {
    name:"Aaryan",
    age:"12"
}

//Function
const myFunction = function(){
    console.log("Hello World");   
}

//typeof Value
/*
Undefined => "undefined"
Null => "object"
Boolean => "boolean"
Number => "number"
String => "string"
Object => "object"
*/