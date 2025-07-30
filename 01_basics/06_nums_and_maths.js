const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

const otherNumber = 124.789
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//according to indian number system

// ++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//Absolute value
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2)); // top value
console.log(Math.floor(4.2));// lower value
console.log(Math.min(2,6,3,8,9));
console.log(Math.max(9,5,6,7));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)//formula..... 











