const school_friends = ["Akshita","Navya","Nanadini","Shagun"]
const collage_friends = ["Avantika","Harshati","Srishti","khushi"]

school_friends.push(collage_friends)
console.log(school_friends);

const allFriends = school_friends.concat(collage_friends)
console.log(allFriends);

const all_newFriends = [...school_friends,...collage_friends]
console.log(all_newFriends);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);



console.log(Array.isArray("Ananya"))
console.log(Array.from("Ananya"))
console.log(Array.from({name:"Ananya"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



