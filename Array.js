const myarray = [1,2,3,4,5,6,]
console.log(myarray[5]);

let myHero = ["shaktiman", "Thor", "allu arjun"]
const myArr2 = new Array(12,2,213,434,)

// ++++++++Array Method++++++++

// myarray.push(99)
// myarray.push(100)
// myarray.pop(3);
// myarray.unshift(55)
// myarray.shift()
// console.log(myarray)
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));


const newArray = [11,22,33,44,55,66]
const newArr = myarray.join()
console.log(newArray);
console.log(newArr);

console.log(typeof newArr);


// slice, splice 

// example of slice 
let ex = [10,11,22,33,44,55]
console.log(ex)
console.log(ex.slice(1,3));
console.log(ex);



// example of splice
console.log(ex.splice(1,3))
console.log(ex)