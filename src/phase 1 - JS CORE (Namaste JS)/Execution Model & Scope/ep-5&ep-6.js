//ep - 5 
// Global Space or Global Object or this or window object
let a = 10;
function b() {
    var x  = 10
}

console.log(this.a); // in global space
console.log(window.a);
console.log(a);
console.log(this.b);
console.log(window.b);
console.log(b)

//if try to console x value it will throw error x is not defined that means x is not in the global space anything variable declared inside the function is not there in the Global space thats why error occurs

// console.log(x) -. throw error x is not defined as it is not inside the Global space or Global Object


// ep-6:
console.log(c); // c will be undefined as it when JS programme executes GEC created and JS allocates the space for c in the Global Object 
var c = 10; // once prgamme executes ahead c got the value assigned as phase 2 of progamme executed 
console.log(c) // c will be 10 so undefined is basically a placeholder and the pure logic its in Global Object and memory allocation on when programme executes
console.log(z) // throws error z is not defined simply z is not there Global Object as z does not get memory allocated in Global Object 

// Js is a programme losely typed
let d = 10;
console.log(d); //10
d = 'type changed'; // string
console.log(d);
d = false;
console.log(d); // d will be false  JS data type can be changed thats why it is loosely typed

