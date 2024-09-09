const user = {
    username : "Dhanush",
    price : 999,


    welcomeMessage: function(){
        console.log(`${ this.username}, welcome to website `)    //to access the current contact of same block 

        console.log(this);
    }
};

user.welcomeMessage();

user.username ="Ranjay" // here you change the values of context

user.welcomeMessage();

// console.log(this);



//++++++++++++++++++++++++++++


function chai() {

    let username ="Ranjay"
    console.log(this);

};

chai();




// ++++++Arrow function++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(23,40))





// =======implicit return ======== we not need to use return and curle bricket  
// we must need to use small bricket to rep it


const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(23,40))