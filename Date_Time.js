// +++++++++++++DATE++++++++++++++++++++++

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));


let myCreatedDate = new Date(2024,0, 24)
console.log(myCreatedDate.toDateString());

let date = new Date(2024, 9, 7, 10, 13)
console.log(date.toString());


// indai mm/dd/yy
let mydate = new Date("09-07-2024")
console.log(mydate.toLocaleString());



// ++++++++++++Time+++++++++++++++


let mytimeStemp = Date.now()
console.log(mytimeStemp);

// convert it into second

console.log(Math.round>(Date.now()  / 1000));




let newDatee = new Date()
console.log(newDatee.getMonth());
console.log(newDatee.getDay());


newDatee.toLocaleString('default',{
    weekday: "long",
})


