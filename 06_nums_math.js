const score = 100

const balance = new Number(100) // New Object
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); //round off

const otherNUMBER = 23.4953
console.log(otherNUMBER.toPrecision(3)); //Means only 3 digits will be there in output not till 3 decimal places

const hundred = 1000000 
console.log(hundred.toLocaleString());

//--------------------------------------------------------------------------------------------------------------------------------------
//maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(6.1));
console.log(Math.floor(6.9));
console.log(Math.min(2,6,3,8,1));
console.log(Math.max(2,6,3,8,1));

console.log(Math.random()); // will give random value between 0 and 1 (decimal)
console.log((Math.random()*10) + 1); // will give value always greater than equal to 1
console.log(Math.floor(Math.random()*10) + 1);

//For random value between 10 and 20 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

