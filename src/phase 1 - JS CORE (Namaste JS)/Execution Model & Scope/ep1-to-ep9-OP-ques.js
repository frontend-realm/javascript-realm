/*
Output Problems (Namaste JS EP 1–9)
Scope: execution context & call stack, hoisting, function/variable environments,
shortest JS program + window/this, undefined vs not defined, scope chain & lexical environment, let/const/TDZ/block scope/shadowing.

*/
/*
//1. (Easy)
console.log(a);
console.log(b);
console.log(c);

var a = 10;
function b() {}
var c = function () {};

//undefined,fn,undefined - correct

//2. (Easy)
var a;
console.log(a);
console.log(typeof a);
console.log(typeof notDeclared);
console.log(notDeclared);
console.log("after");

*/
//3. (Medium)
/*
console.log(typeof a);
console.log(typeof b);

var a = 1;
let b = 2;
*/
// undefined , reference error

//4. (Medium)
/*
var a = 1;
let b = 2;
function c() { return 3; }

console.log(this === window);
console.log(window.a);
console.log(window.b); //undefined as window or global object doesnot have b so undefined 
console.log(typeof window.c);
*/

//true,1,referrence error, function
//typeof a function → "function";

//5. (Easy)
/*
function f(a) {
  console.log(a);
  var a = 10;
  console.log(a);
}
f(5);
*/
//5,10

//6. (Easy)
/*
function f() {
  console.log(a);
  if (false) {
    var a = 5; //var is functional scoped not block scoped
    //let a = 5; // throws error //block scoped
  }
  console.log(a);
}
f();
*/
//error -> incorrect answer 

//7. (Medium)
/*
var a = 10;
{
  var a = 20;
}
console.log(a);

let b = 10;
{
  let b = 20;
}
console.log(b);
*/
//20,10

//8. Medium) — two separate files

//File A
/*
let a = 10;
{
  var a = 20;
}
console.log(a);
//File B  
var b = 10;
{
  let b = 20;
  console.log(b);
}
console.log(b);
*/

//9. (Medium)
/*
let x = 1;
{
  console.log(x);
  let x = 2;
}
*/
//1 -> lexical env follows in block scope - incorrect

//10. (Hard)
/*
var x = 1;

function outer() {
  console.log(x);
  var x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();
console.log(x);
*/

//1,2,2 - incorrect

//11. (Hard)
/*
let v = "global";

function outer() {
  console.log(v);
  let v = "outer";
  function inner() {
    console.log(v);
  }
  inner();
}

outer();
*/

// error refernce error  

//12. (Medium)
/*
const obj = { a: 1 };
obj.a = 2;
console.log(obj.a);

const arr = [1];
arr.push(2);
console.log(arr);

obj = {};
console.log("done");
*/

// 2 , [1,2], error

//13. (Medium)
// console.log("start");
// const x;
// x = 5;
// console.log(x);

//error

//14. (Medium) — two separate files
/*
// File A:
var a = 1;
var a = 2;
console.log(a);

// File B:
console.log("start");
let b = 1;
let b = 2;
console.log(b);
*/

//15. (Hard)
/*
console.log(f());

function f() { return 1; }
function f() { return 2; }
var f = 3;

console.log(f);
*/

//same function with name can be there in a JS file the second ovverrrides it while creation phase or memory allocation time in global scope

// Function declarations are created during the execution-context creation phase; if the same function name is declared again, the later declaration becomes the function referenced by that name.
//2 , 3 // incorrect

// 16. (Hard)
/*
console.log(typeof x);
var x = 5;
function x() {}
console.log(typeof x);  //incorrect
*/

//function  , number

//17. (Medium)
/*
console.log(add(2, 3));
const add = (a, b) => a + b;
*/
//refernce error 

//18. (Medium)
/*
for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(j);
*/
//undefined, undefined - incorrect

// 19. (Hard)
/*
var x = 1;
{
  let x = 2;
  {
    var y = x + 1;
    console.log(x);
  }
}
console.log(y);
console.log(x);
*/
// correct

//20. (Hard)
/*
function show() {
  console.log(c);
}

{
  const c = 5;
  show();
}
*/
// c is not defined

//21. (Bonus — Hard) Call stack + hoisting together
/*
function a() {
  console.log("a1");
  b();
  console.log("a2");
}

function b() {
  console.log(x);
  var x = 5;
  c();
  console.log("b2");
}

function c() {
  console.log("c1");
}

console.log("global");
a();
console.log("end");
*/

//global , a1 , undefined , c1, b2, a2,end - correct

/*

Generate 3 new JavaScript output-based interview problems for me to solve today.

Scope — ONLY these topics, nothing else:
- Execution context, call stack, hoisting
- var vs let/const, block scope vs function scope, TDZ
- Global scope & the `window` object (bare identifier vs property access)
- Lexical scope chain / shadowing (legal and illegal)
No closures, no `this` binding, no async, no prototypes.

Bias toward my weak spots:
1. A `let`/`const` in a nested block shadowing an outer variable of the same name (TDZ for the whole block, not just after the declaration line)
2. Bare identifier access vs `window.x` / `obj.x` property access (only the former can throw ReferenceError)
3. var vs let behavior across loops and nested blocks
4. Legal shadowing (let/const outer + var inner) vs illegal shadowing (var inner + let/const outer, in the same scope chain)

Rules:
- 1 medium, 2 hard difficulty
- Code snippet only — no hints, no answer, no explanation
- Number them 1–3

After I reply with my answers, grade each: correct/incorrect, the actual output, the exact error type if one is thrown, and a one-line mechanism-based reason. No fluff.

*/

// Lots Of questions Daily :
//11-9-2026

//1.Medium — TDZ scope boundaries
/*
let x = 10;

function test() {
  console.log(x);
  {
    console.log(x);
    let x = 20;
    console.log(x);
  }
}

test();
*/

// 2.Hard — bare identifier vs. property access
/*
var a = 1;
let b = 2;

console.log(window.a);
console.log(window.b);
console.log(b);

function reveal() {  console.log(window.c);
  console.log(c);
}

reveal();
*/
// incorrects

//3.Hard — var/let across loops + shadowing legality
console.log("A");

var m = 1;
{
  let m = 2;
  console.log(m);
}
console.log(m);

for (let n = 0; n < 2; n++) {
  console.log(n);
}

for (let n = 0; n < 2; n++) {
  var n = 5;  //shadowing case fails gives error - Identifier 'n' has already been declared 
}

console.log("B");

//A , 2 , 1, 1, B // Incorrect