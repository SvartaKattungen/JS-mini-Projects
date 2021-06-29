//this is the current tempreture in Kelvin

//const kelvin = 293;

const kelvin = 0;

//we convert kelvin to celsius by calculating the 273 degrees difference between them

const celsius = kelvin - 273;

//we convert celsius to fahrenheit by storing the value in the Fahrenheit variable and round down the result of the fahrenheit conversion

const fahrenheit = Math.floor(celsius*(9/5)+32);

 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${kelvin} degrees Kelvin`);

console.log(`The temperature is ${celsius} degrees Celsius`);

let newton = Math.floor(celsius*(33/100));
console.log(`The temperature is ${newton} degrees Newton`);
