//this is the current tempreture in Kelvin
//const kelvin = 293;
const kelvin = 0;
//we convert kelvin to celsius by calculating the 273 degrees difference between them
const celsius = kelvin - 273;
//we convert celsius to fahrenheit by storing the value in the Fahrenheit variable
const Fahrenheit = celsius*(9/5)+32;
//rounding up the result of the fahrenheit conversion
let fahrenheit = Math.floor(Fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);

let newton = Math.floor(celsius*(33/100));
console.log(`The temperature is ${newton} degrees Newton`);
