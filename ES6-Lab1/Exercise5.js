//Exercise 5 - Calculate sum/product
var array = [1,2,3,4]
const calculateSum =(accumulator,currentValue) => accumulator + currentValue;
const calculateProduct =(accumulator,currentValue) => accumulator * currentValue;

console.log(array.reduce(calculateSum));
console.log(array.reduce(calculateProduct));
