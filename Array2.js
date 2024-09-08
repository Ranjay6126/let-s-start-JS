const marvelHero = ["thor", "IronMan","spiderMan"]

const southHero = [ "Allu arjun", "Naga", "Vjay"]

// marvelHero.push(southHero);   // this method is not used for the add, join , aor concat the two diff arr it take second array as element [arr1[arr2]]


// to join the two array in a single array we use two method there are concat and [...arr1, ...arr2] called spread method 
const newHero = marvelHero.concat(southHero); 
console.log(newHero)


// spread method

console.log(allHero = [...marvelHero, ...southHero]);





// another array 

const anotherarray = [1,232,23,[12,6,657,5[546,46456,546]]]

const another_Array = anotherarray.flat(Infinity);
console.log(another_Array);








console.log(Array.isArray("Ranjay Prajapati"));
console.log(Array.from("Ranjay Prajapati"))




let s1 = 234;
let s2 = 1242;
let s3 = 55435;

console.log(Array.of(s1,s2,s3));