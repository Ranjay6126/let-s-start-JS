var z = 200;

let a = 2004;  // Globle scope

if(true){ // {} inside the bricket call local scope
    let a = 10;
    const b = 23;
    var z = 55;
    // console.log(c);
    console.log(a);
}

console.log(a);
// console.log(b);
console.log(z);