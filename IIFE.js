(function chai (){
    // named iife
    console.log(`Db connected`);

})();


// arrow function for iife ()();

((name) => {
    console.log(`db is connected $(name)`);
})("Dhanush Prajpati")