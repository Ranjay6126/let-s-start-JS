// ++++++++++~NUMBER ++++++++++++

consthttps://i.ibb.co/F0SmkRF/icon.png score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.348
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(4));


const hundreds = 10000000
console.log(hundreds.toLocaleString());

// for indian 

console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++++++++MATHS++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)) 
//Absolute values means -ve values will be +ve values
console.log(Math.round(2.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,2,34,52,1,0));
console.log(Math.max(4,2,34,52,1,0));


// important 
console.log(Math.random());
console.log((Math.random()*10) + 1);  // min  values 1-10

console.log(Math.floor(Math.random()*10) + 1);


min =  10;
max = 20;

console.log(Math.floor(Math.random()*(max - min + 1))+ min)

