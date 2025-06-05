const name = "Aaryan"
const repoCount = 5

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("aaryang")

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4); // return values from index 0 to 3
console.log(newString);

const anotherString = gameName.slice(-7,4) //in slice we can give negative index also 
console.log(anotherString);

const newStringOne = "    aaryan     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aaryan.com/aaryan%20gupta"
console.log(url.replace('%20','-'));

console.log(url.includes('aaryan'));
const abc = "aaryan-gupta-2025"
console.log(abc.split('-'));


