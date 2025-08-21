// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
        //console.log("5 is the best number");
        
    //}
    //console.log(element);
    
//}

for (let i=1; i <= 10;i++) {
    //console.log(`outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
    
    
}