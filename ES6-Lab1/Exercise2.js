//Exercise 2 - Capitalize First Letter
const words = ['fooBar','nodeJs'];
const capitalize = ([first, ...rest]) =>{
    return first.toUpperCase()+rest.join('').toLowerCase();//spread operator to unpack array
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
