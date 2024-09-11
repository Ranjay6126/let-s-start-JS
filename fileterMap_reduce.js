// let coding = [ "js","cpp", "py", "java", "rb" ]

// const values = coding.forEach( (item) =>{
//     console.log(item)
//     return item
// })

// console.log(values);    // for each won't return any values

// +++++++++++++++++++++     filter return the values    ++++++++++++++++++

const num = [1, 2, 3, 4, 5, 6];

const newNum = num.filter((num) => {
  return num > 4; // if you are using scope than you must have to write return
});
console.log(newNum);



// other best ways


const num1 = [1, 2, 3, 4, 5, 6];

num1.forEach( (num) => {
  if (num > 4) {
    num1.push(num1);
  }
});
