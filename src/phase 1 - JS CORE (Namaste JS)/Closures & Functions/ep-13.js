//1. Function Statment:
function a() {
    console.log("a is called");
};

a();

//functions are heart of JS 

//2. Function Expression:
var b = function () { 
    console.log("b is called")
}

b();

// function acts like a value , its like a value we are initialising it with cariable b

// Diffrence between Function statement and Function Expression,

// major difference is -  hositing

a();
b();
// Function Statemnt
function a() {
    console.log("a is called");
};
// Function Expession
var b = function () { 
    console.log("b is called")
}

// what will happen here 
/*

b will throw b is is not a function;

because b is a variable hoisted globally before initialised in global space it will be undefined 
so accessing that before initialising will give undefined as var b = 
so b is not a function

*/

// 3. Function Declaration is nothing but aka Function Statment

//4. Anonymous Function
// Function Without name is called anonmyous function

// It doesnot have its own identity: below eg
//function () {. //Anonymous Function - function without name 
 // but will throw error function statment require a fucntion name - a syntax error.
//}

// anonymous function are used as values use cases :
// assign them to a variable
// pass them as a argument to another function.

//5. Named Function Expression
//output question

var c = function xyz() {
    console.log('named function expression')
}

// corner case in this :
c(); //fine it will get called
xyz(); //Reference Error 
// ? check this carefully it is not declared in the global scope it is in local scope so thats why reference error xyz not defined because it is not there in global space

// 6. Difference Between Parameters and Arguments ?
function explainParaArg(Param1,Param2) {
 console.log(Param1,Param2);
}

explainParaArg(4,5) //arg1,arg2 -> actual value , values send while calling the function

//As Function is treated as values as we have seen in the function expression assigning to variable 
function setFunction(fn) {
    console.log(fn)
}

// we can pass function as values from another function as argument
setFunction(function () {
    console.log('FUnction passed as argument')
})

//7. First Class Function

//Arrow Functions:
// explained in later episodes .