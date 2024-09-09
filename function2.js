// Rest operator or spread operator

function calculateCartPrice(...num1){
    return num1;

}
console.log(calculateCartPrice(200,45,600));


// making an object and how to passing into the function and how to use it\

const user ={
    userName: "Dhanush",
    price:99,
}

function handleObject(anyObject){
console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)

}

handleObject(user);

// we can also pass object in it 

// handleObject({
//     username : "sam"
//     prices: 99;
// })


// we can also pass array in it

const myArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([200, 300, 450, 540, 500]);