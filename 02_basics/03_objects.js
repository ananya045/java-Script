//Singleton

//object literals
//Object.create # through constructor

const mysym = Symbol("key1")


const JsUser= {
    name: "Ananya",
    [mysym]:"Mykey1",//symbol syntax
    age: 20,
    location: "Lucknow",
    email:"xyz@gmail.com",
    isLoggediIn: false,
}

console.log(JsUser.email);//one way
console.log(JsUser["email"]);//another way
console.log(JsUser[mysym]);
//object.freeze(jsuser)

JsUser.greeting = function(){
    console.log("Hello users");
    
}
//console.log(JsUser.greeting);
JsUser.greetingTwo = function(){
    console.log(`Hello users,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


