let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(`${newDate.getDay()}`)

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
