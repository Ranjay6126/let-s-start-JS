let arr = [ 1,2,3,4,5,6]

for( let arrays of arr){
    console.log(arrays);
}


// to print the array in to the horizontal order

let arry = [1, 2, 3, 4, 5, 6];
const horizontalOutput = arry.join(', ');

console.log(horizontalOutput);


const greeting = "Hello world"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}




// Map

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR', "france")

console.log(map);


// it will prit in the form of arrays

for(const keys of map){
    console.log(keys);
}


// it will print in the form of object

for (const [key, value] of map) {
    console.log( key , ':-' ,value)
};



// for of loop in the object

const myObject = {
    'game' : ' NFS',
    'game2': 'Spiderman'
}

// for (const keeys) // my Object is not iterable there is another ways to iterate method    

//  for object we use for in loop

let MyObject = {
    game : ' NFS',
    game2: 'Spiderman'
}

for (const key in MyObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// use for-in loop in array


let programming = [ "js","cpp", "py", "java", "rb" ]

for (let program in programming){
    console.log(programming[program]);
}


// +++++++++++++++++++++++++++________________((((((((((((()))))))))))))


// for each loop

let coding = [ "js","cpp", "py", "java", "rb" ]

coding.forEach(function (val){
    console.log(val);
})


// one more example for each with arrow

coding.forEach((item, index, coding) =>{
    console.log(item, index, coding);
})



// by using for each access the element of array object

const myCoding = [
    {
        language : "hindi1",
        language1 : "Nepali",
        language3 : "English"
    },

    {
        language : "hindi2",
        language1 : "Nepali",
        language3 : "English"
    },

    {
        language : "hindi3",
        language1 : "Nepali",
        language3 : "English"
    }
]

myCoding.forEach((item,index, array) => {
    console.log(item, index, array.language);

})