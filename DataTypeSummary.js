const id = Symbol('123')

console.log(id);

const anotherId = Symbol('123')

console.log(id === anotherId)



// there are 2 Datatype classified on the basic of there types 

// Primitive Datatype(pass by the values)   => there are 7 primitive datatype are
// String, Number, Boolean, undefined , Null, Bigint, Symbole

// => If you copy it from somewhere then reference of its original data is 
// from somewhere then the reference of its original data is not given to you in the memory
//  after coping giving to us



// Call by the Reference type (NON Primitive data type) :-==>> they are 
// Array, Object , Function 
// Directly allocate to you in the memory




// Array
const heros = ["shaktiman", "thor" ,"naagraj" , "doga"]



// Object

let Myobject = {
    name : "Dhanush",
    age :23,
}




// Function

 const myfunction = function() {
    console.log("Hello Ranjay Bhai")
}


// ======> > Js is Dynamic typed language



const bigint = 1243564575876543n ;
console.log(typeof bigint)


// Typeof Object id  "object fuction" remember interview question
// Typeof Null is is Object
// typeof Object is Object
// typof undefined is undefined

// .....Array, Object, Function >> non primitive datatpe is always function