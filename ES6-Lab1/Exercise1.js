//Exercise 1 - ES6 Syntax
const greetText = 'Hello ';
let gretter = (myArray, counter) =>{
    for(let index of myArray){
        console.log(greetText + index);
        //console.log(' ${greetText} ${index} '); template literals
    }

}
gretter(['Randy Savage','Ric Flair','Hulk Hogan'],3);
