const myArr = [1,2,3,4,5]

const newArr = new Array(1,2,5,7,8)
console.log(newArr[0]);

//Array Methods
myArr.push(0) // element is inserted at end
console.log(myArr);

myArr.pop() //last element is removed
console.log(myArr);

myArr.unshift(9) //element is inserted at start
console.log(myArr);

myArr.shift() // removes the first element
console.log(myArr);

console.log(myArr.includes(9))
console.log(myArr.indexOf(3));

const anotherArr = myArr.join() //makes the array into a string
console.log(anotherArr);
console.log(typeof anotherArr);

//Slice and Splice 

console.log("A ",myArr);
//Slice
const myn1 = myArr.slice(1,3) //slice does not change the original array
console.log(myn1);

console.log("B ",myArr);
//Splice
const myn2 = myArr.splice(1,3) //splice changes the original array
console.log("C ",myArr);
console.log(myn2);

const marvel = ['iron man','spiderman','vision']
const dc = ['joker','batman','superman']
//PUSH
marvel.push(dc) //Push adds whole array as object to marvel
console.log(marvel);
marvel.pop()
//CONCAT
const all_heros = marvel.concat(dc) //while concat adds elements of dc to marvel
console.log(all_heros);

//SPREAD Method
const all_new_heros = [...marvel,...dc] // ... is spread method used to take all elements in one place 
// IN spread we can combine more than 2 Arrays which we can't do by concat
console.log(all_new_heros);

//Flat Array
const one_array = [1,2,3,[4,5,6],7,[4,6,[8,9]]]
const flat_array = one_array.flat(Infinity)
console.log(flat_array);

//Making array from string
console.log(Array.from("Aaryan"));

console.log(Array.from({name: 'Aaryan'})); //cant convert directly an object to array
//Making an array "Of" variables
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
