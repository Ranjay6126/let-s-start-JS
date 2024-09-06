const name = "Ranjay "
let last =" Prajapati"

console.log(`my  fist name is ${name} and my last name is ${last}`);


console.log(name.length);
console.log(last.toUpperCase());
console.log(name.charAt(2));
console.log(last.indexOf('t'));

const newstring = last.substring(0,10);
console.log(newstring);

const anotherstring = last.slice(-9, 4);
console.log(anotherstring);




let hero = "       Allu arjun  "
console.log(hero.trim());



let url = "https://ranjay.com/prajapati%20haji";

console.log(url.replace('%20','_'));


console.log(url.includes('prajapati'));



