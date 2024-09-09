function sum (num1, num2){
    console.log(num1+num2);
}
sum(23,2);
const result = sum(2,4);
console.log("Result:", result); // it will print undefined because console print doesn't mean that it will be the return the values too



// Return types example
function sumNum(Number1 , Number2){
    let result = Number1 + Number2
     return result;
}

console.log(sumNum(45,5));

//==========================================

function LoginUser(username){
  return `${username} just logge₫ in `;
}
 
LoginUser("Dhanush");  // upto here can't get print by using function call because it is return types for that to print we must have to use console.log
console.log(LoginUser("Ha ji sab badhiya"));
console.log(LoginUser()); //if values is not passed then it print undefined