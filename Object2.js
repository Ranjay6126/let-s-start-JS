// object declear with help of constructor

// const tinderUser = new Object() ;   // Singleton object 

const tinder_User ={}  // Non singleton object 

tinder_User.id ="123asd"
tinder_User.name = "Sammy"
tinder_User.isloggedIn = false 
 
console.log(tinder_User);


// *********************************

const regularUser = {
    email : "ranjaypandit@gmail.com",
    fullName : {
        userfullName :" Ranjay",
        fistUser : " Dhanush",
        lastName: "Pandit"
    }
}

console.log(regularUser.fullName?.userfullName);


// ++++concat or combine the object 

const obj1 = {
    1: "a", 
    2: "b",
}

const obj2 = {3:"c" , 4:"d"}


// spread method

const obj3 = {... obj1, ...obj2};
console.log(obj3);




// Database values formate 

const user = [
    {
        id:1,
        email:"ra@gmail.com",   
    },

    {
        id:1,
        email:"ra@gmail.com",   
    },

    {
        id:1,
        email:"ra@gmail.com",   
    },

    {
        id:1,
        email:"ra@gmail.com",   
    },
]
const apple = user[1].email;
console.log(apple);



// important the concept to take out the keys and  value of any object 


console.log(tinder_User);
console.log(Object.keys(tinder_User)); //most important concepts mostly used in the future
console.log(Object.values(tinder_User));
console.log(Object.entries(tinder_User));


// to ask the value in the object

console.log(tinder_User.hasOwnProperty('isloggedIn'));






