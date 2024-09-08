// Singleton ==>> Object.create



// Object literals
const mySym = Symbol("mykey1")
const user = {
    name : "Dhanush",

     "full name " : "Hitesh choudhary",

     [mySym] : ("mykey1"), // to write a symbole datatype

    age : 23,
    location: "Sitamari",
    Email : "panditranjay33@gmail.com "   
}
 
console.log(user.name);   // this is not good way to access the object  because "Fullname " can't be acess by . method it is treating as the string to the full name aways before : is working as String


// good way to access the object element is 

console.log(user["Email"]);

console.log(user["full name "]) // best way to access

console.log(user[mySym]); // to access the symbole datatypes

console.log(typeof mySym)



// to change the value 

user.Email = "dhanush@gmail.com"
console.log(user["Email"]);


user.Email ="sushant@gmial.com"



// ++++++++++   // Object.freeze(user);  //++++++++++


user.Email ="apple@gmail.com"; //after freeze can't be add this email
console.log(user);


user.greeting = function(){
    console.log("Hello Js user");

}


console.log(user);


user.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)
}


console.log(user.greeting());
console.log(user.greeting2());




