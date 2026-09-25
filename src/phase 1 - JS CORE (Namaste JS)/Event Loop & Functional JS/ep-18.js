///High - order Function. -> HOF
/*
    function x() {
        console.log("x");
    }

    function y(callback) {
        callback()
    }

    x is passed as an argument to y.
    y invokes x using callback().
    Therefore, x acts as a callback function.

    y(x);

    Difference - Key
    y(x);   // Pass the function reference.
    y(x()); // Invoke x immediately and pass its return value.


*/

/*
    Callback = the function passed to another function.

    Higher-order function = the function that accepts or returns another function.

*/

//////////////////////////**************************************************************************************************************** */
 
///Q -> Find Area , circumference , diametere of the given radius array by creating high-order function and callback and reusable ,modular
// one function one responsibility , modular, main DRY principle 

let radius = [2,3,4];

// how beautifully this function is wriiten one function one responsiblity making code clean and functional programming more smooth 
//Single Responsibility Principle
let area = function(radius) {  //creating a callback function here
    return Math.PI*(radius * 2);
}

let circumfernce = function(radius) {  //creating a callback function here
    return 2*Math.PI*radius;
}

let diameter = function(radius) {  //creating a callback function here
    return 2*radius;
}


// Higher-order function:
// Accepts a callback and an array of radii.
// Applies the callback to every radius.
// Returns a new array containing the results.
function calculate(logic, radius) { //passing the callback function as parameter to the high-order function 
    let result = [];
    
    for(let i = 0; i < radius.length; i++) {
        //some point in the code of high order function it will get call -> callback invoked
        // Invoke the callback with the current radius.
        result.push(logic(radius[i])); 
    }

    return result;
}


console.log(calculate(area, radius)); //passing the callback as argument in the high order function 
console.log(calculate(circumfernce, radius));
console.log(calculate(diameter, radius));