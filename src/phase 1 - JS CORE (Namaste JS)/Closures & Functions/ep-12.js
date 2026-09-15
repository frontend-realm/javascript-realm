//Q1 -> what is closure ?
function outer() {
    var a = 10;
    function inner() {
        console.log(a);

    }
    return inner;
 }

 outer()();

 //or 

 var close = outer();
 
 close();

 //follow up question :
 //i -> outer()()
 //ii) what if we move variable before return closure that will be closure or not ? yes closure break into Execution context
 function outer() {
    function inner() {
        console.log(a);

    }
    var a = 10;
    return inner;
 }

 outer()();

 //iii) changing var a to let a // no value change because we are acccessiong it after initialisation so no reference error clean
function outer() {
    function inner() {
        console.log(a);

    }
    let a = 10;
    return inner;
 }

 outer()();

//iv) passing argument and receiving as parameter still closure or not ?
function outer(b) {
    function inner() {
        console.log(a,b);

    }
    let a = 10;
    return inner;
}

 outer("Hellow world")();

//v) outer function is nested with another function will inner has access to that as well what will happen?
//Relationship of scope chain and closure.
function superOuter() {
    var z = 20;
    return function outer(b) {
        function inner() {
            console.log(a,b,z);

        }
        let a = 10;
        return inner;
    }

}

superOuter()("Hellow")();

// vi) this is a closure right its forming closure can you tel me in a single line that inner function is a closure ? like this or inner function forming closure with outer env of outer fucntion ?

/* 


    Yes. The most precise one-line statement is:

    inner is a closure because it retains access to the lexical environment of outer, specifically the variable a, even after outer() has finished executing.

    Or, if you want an interview-friendly line:

    A closure is a function (inner) together with its surrounding lexical environment (outer's environment) that it remembers.

    So your understanding is correct: inner forms a closure with outer's lexical environment.


*/

// vii) conflicting name variable in JS:
// what is same name variable in global declared and inittialised than what will happen ?
// same it will print a = 10 
let a = 20;

function outer() {
    let a = 10; // but if a was not here than it would have defaulted to the global variable so it is because forms closure with its outer env so if it doesnot find a inside it outer env so it will goes more deeper heierechly it will go more outemeest and if not in global also it will throw no a defined reference error like scope chain.
    function inner() {
        console.log(a);

    }
    return inner;
 }

 outer()();

// Q2: Advantages Of closure?
//follow ups:
//i) Data Hiding and encapsulation
//eg:
var counter = 0; //this counter can be access by any function in the code to make it private or data pricacy or encapsulated we will use closure

function incrementCounter() {
    counter ++;
}

//after using closure:
function count() {
    var counter = 0;  // now this variable is private for this function and no other function can use this encapsulated

    function incrementCounter() {
        counter ++;
        console.log(counter)
    }

    return incrementCounter;
}

var counterIncrease1 = count();
counterIncrease1();
counterIncrease1();

var counterIncrease2 = count(); // creating another copy and start counter from fresh from zero
counterIncrease2();
counterIncrease2();

//ii) make it scalable and optimise
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount()); // 2

// Closure is primarily useful here for encapsulation and maintaining private state, not for optimizing the increment operation itself.

// iii) disadvantages of closure:

//over consumtion of memory
// Garbage collection and closure relation:
//eg

function x() {
    var a = 10;
    var b = 20; //smartly get garbage collected by modern browsers no in the memory present 

    return function y() {
        console.log(a);
    }
}
// a and b both values are lexically refered by the y function but a is using b not so b will be garbage collected by the browser.
var z = x();

z();
