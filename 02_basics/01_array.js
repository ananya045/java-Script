// array

const myArr = [0, 1, 2, 3, 4, 5]

const friends = ["Ananya","Nandini","Akshita"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

//properties :A shallow copy of an object is a copy whose properties share the same references 
// (point to the same underlying values) as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references 

//Methods 

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) //add value in the first place
myArr.shift()
console.log(myArr);
console.log((myArr.includes(8)));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ",myArr);

console.log(myn2);







