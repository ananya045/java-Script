//const tinderUser= new Object()//singleton objects

const tinderUser= {}// non singleton objects
tinderUser.id ="123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Annu",
            lastname:"Chaudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = Object.assign({},obj1,obj2)//one way
const obj3 = {...obj1,...obj2}//spread operator
//console.log(obj3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    
]

