const name = "Ananya"
const repoCount = 50

//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//another way 

//string declaration another method

const gameName = new String('Ananya')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));//character position
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(1,5)
//console.log(newString);

const anotherString = gameName.slice(2,5)
//console.log(anotherString);

const newOne = "    Ananya    "
console.log(newOne);
console.log(newOne.trim());//remove white spaces and line terminators

const url = "https://ananya.com/ananya@54chaudhary"
console.log(url.replace('@','-'));
console.log(url.includes('ananya'));









