//Objects can be made through either "literals" or "Constructors"
// Objects made through "literals" are "Not Singleton" while those 
// made from "Constructors" are "Singleton"

// COnstructor method ----> Object.create()

//Object Literals
const mySym = Symbol('key1')

const JsUser = {
    name : "Aaryan",
    "full name" : "Aaryan Gupta",
    [mySym] : "myKey1",            //TO use a Symbol as a key in an object use []  
    age : 18,
    location: "Raipur",
    email: "aaryan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Saturday']
}
// 2 methods to access properties of Object
console.log(JsUser.email);
//OR
console.log(JsUser['email']);

console.log(JsUser['full name']);

console.log(JsUser[mySym]);//Symbol can be accessed only by []

//Freezing an object
JsUser.email = "aaryan_chatgpt@gmail.com";
//Object.freeze(JsUser)
JsUser.email = "aaryan_microsoft@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Aaryan!!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);//This is reference to the same object
}
console.log(JsUser.greeting); //This will give Function(anonymous)
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Singleton

//const tinderUser = new Object() //By COnstructor so Singleton
const tinderUser = {}           //By Literal so Non Singleton

tinderUser.id = "Abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname: {
            firstname: "Aaryan",
            lastname: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//1) const obj3 = {obj1,obj2} 
//2) const obj3 = Object.assign({},obj1,obj2,obj4) //In this ----> {} is the target element in which all the obj will be added to
//3) Spread method
const obj3 = {...obj1,...obj2}
console.log(obj3);

//Storing keys and values in an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Object Destructuring
const course = {
    name: "JS Course",
    price: "1000",
    courseInstructor: "hitesh"
}
//If you want to print again and again 
const {courseInstructor:instructor} = course
console.log(instructor);
 
// Json Format
// {
//     "name":"Aaryan",
//     "course":"Js in hindi",
//     "price":"free"
// }
// or API can also be an array like
// {
//     {},
//     {[]},
//     {}
// }