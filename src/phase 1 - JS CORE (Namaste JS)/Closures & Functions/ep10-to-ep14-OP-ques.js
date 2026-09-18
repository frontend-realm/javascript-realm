//1. (Easy)
/*
var greet = function sayHi() {
  console.log("hi");
};

greet();
sayHi();
*/
//correct 

//2. (Easy)
/*
sayA();
sayB();

function sayA() {
  console.log("A");
}

var sayB = function () {
  console.log("B");
};
*/
//A , undefined //correct - partial  say B is not a function in console

//3. (Medium)
/*
function outer() {
  var count = 1;
  function inner() {
    console.log(count);
  }
  count = 100;
  return inner;
}

var fn = outer();
fn();
*/
//100 - correct

//4. (Easy)
/*
function counterFactory() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = counterFactory();
const c2 = counterFactory();

console.log(c1());
console.log(c1());
console.log(c2());
console.log(c1());
*/
//1 2 1 3 //correct

//5. (Medium)
/*
function z() {
  var b = 9;
  function x() {
    var a = 7;
    function y() {
      var b = 1;
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
*/
//7,1 - coorect

//6. (Medium)
/*
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}
console.log("start");
*/
//start 3  - Incorrect

//7. (Easy)
/*
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}
console.log("start");
*/
//start 1 2 3 //correct

//8. (Hard)
/*
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  })(i);
}
console.log(i);
*/
// 1 2 3  - Incorrect

//9. (Hard)
/*
function scheduleLogs() {
  for (var i = 0; i < 3; i++) {
    let j = i;
    setTimeout(function () {
      console.log(i, j);
    }, 0);
  }
}
scheduleLogs();
*/
//3,0 - 3,1 - 3,2 //correct

//10. (Easy)
/*
function () {
  console.log("hi");
}();
*/

//correct

//11. (Easy)
/*
(function () {
  console.log("IIFE ran");
})();
*/
// incorrect

//12. (Medium)
/*
function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
console.log(double(triple(2)));
*/
//10,15,12 - correct

//13. (Medium)
/*
function createBankAccount() {
  let balance = 100;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    }
  };
}

const acc1 = createBankAccount();
const acc2 = createBankAccount();

console.log(acc1.deposit(50));
console.log(acc1.withdraw(30));
console.log(acc2.deposit(200));
console.log(acc1.deposit(10));
*/
//150 , 120 , 300, 130

//14. (Hard)
/*
console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

function block() {
  const start = Date.now();
  while (Date.now() - start < 50) {}
}

console.log("3");
block();
console.log("4");
*/
//1342

//15. (Hard)
/*
var factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5));

var other = fact;
console.log(typeof other);
*/
//in correct 

//16. (Medium)
/*
function attachCounter() {
  let count = 0;

  function handler() {
    count++;
    console.log(count);
  }

  return handler;
}

const onClick1 = attachCounter();
const onClick2 = attachCounter();

// Simulate: click A, click A, click B, click A
onClick1();
onClick1();
onClick2();
onClick1();
*/
// 1 2 1 3 - correct

//17. (Hard)
/*
function secretHolder() {
  let secret = 42;
  return {
    reveal: () => secret
  };
}

const holder = secretHolder();
console.log(holder.secret);
console.log(holder.reveal());

secret = 100;
console.log(holder.reveal());
*/
//error , 42 , 260 line error , 42 //incorrect 

//18. (Hard)
/*
function countdown(n) {
  console.log(n);
  if (n > 0) {
    setTimeout(function tick() {
      countdown(n - 1);
    }, 0);
  }
}

countdown(2);
console.log("after call");
*/
// after call, 2 , 1  - Incorrect

//19. (Medium)

function delayedGreeting() {
  var message = "Hello";

  setTimeout(function () {
    console.log(message);
  }, 0);

  message = "Updated";
}

delayedGreeting();
console.log("main done");

// main done , updated