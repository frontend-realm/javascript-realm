// closure : function along with its lexical env forms a closure
/*
    function outer() {
        var a = 8;
        function inner() {
            console.log(a);
        }
        inner();
    }

    outer()
*/

// 1) What is Closure : 
// inner forms a closure with the lexical env of outer
//inner uses variable a , and a belongs to outer lexical env

/*
    JavaScript looks for a:

    First in inner's own environment → not found
    Then in the outer/lexical environment → finds a = 8
    Prints 8
*/

// closure is the combination of inner + the env it retains access to
// Closure = function + remembered lexical environment.

// 2. Not Every Function Inside Function is a closure doubt cleared by explaination below:
/* 
    function inside function -> closure not a valid statement its wrong nested function if
    function retains access to variables from its surrounding lexical env is what closure is  formed


    Function inside function
        ↓
    Can access outer variables
        ↓
    Closure

    // function along with its lexical env is what when closure is formed.

*/

// Not a Closure
/*
    function outer() {
        let a = 10;

        function inner() {
            console.log("Hello");
        }

        inner();
    }
    outer();
*/

//3. Explanation Of Closure In Deep Level and Interview Level Explanation:
// function is heart of JS 
//    - we can return inner function from outer function istead of calling it
function outer() {
    var a = 10;

    function inner() {
        console.log(a);  
    }

    a = 100; // its a corner case 

    return inner; // as returned EC of outer ends and popped out from callstack and goes to outer() where called 

    // we can write like this as well
    /*
        return function inner() {
            console.log(a);
        }
    */
}

var result = outer();

console.log(result);

result();

/*
    Now result contains inner function as fn so when i revoke it or call it like [result()] does it will have the context of a because
    from call stack outer is gone does it will have a value retain or not ? big question ->
    it will return 10
    here closure comes to a picture.


    In Deep Explanation On This :
    when fn is returned from another fn still maintains their lexical scope they remember where they were
    actually present though outer fun not exist in call stack and all but still inner fn still remembers 
    its lexical scope where it comes from

    Simple Terms :
    when you return inner Fn not just a function code was returned but a closure was returned that time
    and closure includes  - [function + lexical env ] that whole closure was return that time

    This is what closure is in deep theory and Interview explanation as well the; the above explained.

*/

//4. Corner Cases:

function z() {
    var b = 9;
    function x() {
        var a = 7; 
        function y() {
            console.log(a,b)
        }
        y();
    }
    x();
}

z();


