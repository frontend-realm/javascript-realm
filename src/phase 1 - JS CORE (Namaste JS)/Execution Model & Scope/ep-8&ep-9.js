//a) Ep-8 : let , const and Temporal Dead zone ->

// i)Temporal Dead zone:
/*
a is hoisted and allocates a different space in the memory 
and a is hoisted and initialised between that time phase a is in temporal dead zone accessing on that phase throws a referrence error as it is not initialised yet.

console.log(a); //accessing a in its temporal dead zone will throws an error -> refference error
let a = 10; 

console.log(a);
var a = 10;  // it is in global scope not in a different memory space so it gives undefined when access it

incase of let is different -> gets new memory space and temporal deal zone hoisted (giving memory space ) and initialize phase or time ,

*/

//ii)let , const : 
/*
let a ; // declare

a = 10; // initialise in the code later on 

const a ;

a = 10 // we cant do this JS will throw a error syntax error because in const keyword needs declaration and initialisation at the same time 

const a = 10 // declare and intilise same time 

const > let > var // strictness const is more strict 
*/

/*

iii)Errors in JS 
i)Rference Error -> when variable is not in the memory space like not referring it will give you reference error 

like :

console.log(x) // x is not defined a reference error because x is not there in global space memory 

console.log(a) // a is not intialised we are trying to access a in its temporal dead zone // refernce error not able to refer 
let a = 10

ii) syntax error :
let a = 10;
let a = 100 // syntax error as duplicate identifier 

const a ;
a = 10 // syntax error as const keyword needs to be declare and initialise at the same time

iii) type error 
const a = 10;   Uncaught TypeError: Assignment to constant variable.
a =20
*/

// b)Ep-9: BLOCK SCOPE & Shadowing:
 
/*

i)Block -> 

if(true) true // ecepts one statment what if it needed multiple statement or statement grouped together than we use : Block
{
 //Block -> Grouping the multiple statement together where the JavaScript excepts one statement Block helps in that case
}

ii) Block Scope -> 

{
    var a = 10;
    let b = 20;
    const c = 30; 

    console.log(a);
    console.log(b);
    console.log(c);
    
}
 console.log(a);
 console.log(b);
 console.log(c);

Let / Const are block scope -> Why:

b,c : are hoisted in a different memory space a reserved memory space which is reserved for a block
so we can access this variable inside scope outside block scope it will throw erro of not defined 

reserved space->
block:
b:20
c:30

and a is hoisted in global space or global scope so we can access it anywhere inside or outside the block scope

iii) Shadowing :

var a = 10
let b = 20
const c = 30

{
    var a = 100;
    let b = 200;
    const c = 300;

    console.log(a);
    console.log(b);
    console.log(c);

}
console.log(a);
console.log(b);
console.log(c);

when we console inside the block scope we get a : 100, b: 200, c: 300 so we say that a,b,c variable shadowed the variable outside the scope but the real reason is 
these variables got different memory space or hoisted different space except the a as it is hoisted to global reffering to one space only

script
b: 20
c: 30

block
b: 200
c: 300

global
a: 10 later change to 100 as it is reffereing to one space thats why 

this is what is happening behind the picture of shadowing these variables are diiferent memory space .

iv) Few cases in this block scope and shadowing:

case : Illegal shadowing Valid or not Valid 

let a = 20;

{
    var a = 200;
}
illegal shadowing throws a error identifier already declared a 

we cannot shadow var using a let 
but we can shadow let using a let 

let a = 20;

{
    let a = 200
}

//no error valid 

vice versa :

var a = 20;
{
    let a = 200;
}

valid we can shadowed it 

var is a function scoped:

let a = 20;

function x() {
    var a = 200;
}

valid no error 

v) Lexical Block Scope :
    It also created a lexical env also in Block:
    const a = 10;
    {
        const a = 100;
        {
            const a = 1000

            {
                console.log(a) //1000
            }
        }        
    }


*/

// Some Test and Trials Practise on this coding :

//1.
let firstName = 'Ritesh'
{
    firstName = 'rakesh'
    console.log(firstName);
}
console.log(firstName)

// rakesh , rakesh because it is reffering to one memory space only thats is script firstName variable hosted on there so one pointing.
//2
let lastName = 'Ranjan'
{
    let lastName = 'Sharma'
    console.log(lastName);
}
console.log(lastName);

//3
var numberOne = 10;
function printNumberOne() {
    var numberOne = 100;
    console.log(numberOne);
}
printNumberOne();
console.log(numberOne);
//100,10 -> var is functional scoped and remember the cocepts of earlier function execute creates a separate Execution context

//4
let numberTwo = 20;
function printNumberTwo() {
    var numberTwo = 200;
    //let numberTwo = 200;
    console.log(numberTwo);
}
printNumberTwo();
console.log(numberTwo);

//200,20

//5
const numberThree = 30;
function printNumberThree() {
    var numberThree = 300;
    //let numberTwo = 200;
    // const numberThree = 300;
    console.log(numberThree);
}
printNumberThree();
console.log(numberThree);

//200,20 concepts of earlier function execute creates a separate Execution context
// GEC -> EC creates a local space separate and once execution over execution popped out from callstack this is why all the function question above is solvable with this concept 3,4,5 questions