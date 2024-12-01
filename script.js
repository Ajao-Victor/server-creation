             //MODULE CREATION 
// this is a type of self-built module
const receivedNumber = require('./script2')
const a = receivedNumber.largeNumber1;
const b = receivedNumber.largeNumber2;
const sum = eval(a+b);
console.log(__dirname);
setTimeout(() => {
    console.log(sum);
    console.log(receivedNumber.currentDate());
    

},1000)
// fs and http are inbuilt node modules' examples
const inbuiltModule = require('fs')
console.log(inbuiltModule);


