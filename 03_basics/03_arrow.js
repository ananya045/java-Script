const user = {
    username:"Ananya",
    price: 999,

    welcomeMessage :function(){
        console.log(`${this.username},Welocme to website`);//this keyword is used for current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Annu"
// user.welcomeMessage()
//console.log(this)
// function chill(){
//     let username="Binod"
//     console.log(this.username);
    
// }
// chill()

const chat = () => {
    let username = "anushka"
    // console.log(this.username);
    
}
chat()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(9,8));

