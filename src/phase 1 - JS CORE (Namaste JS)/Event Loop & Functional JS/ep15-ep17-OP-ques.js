//MOST IMPORTANT EVENT LOOP QUESTION NEEDS REVISIONS SIMILAR QUESTOONS

//Q1. 
/*
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
*/
//ADCB - Correct

//Q2.
/*
console.log('start');
setTimeout(() => console.log('timeout'), 0);
const s = Date.now();
while (Date.now() - s < 2000) {} // block main thread for 2s
console.log('end');
*/
//start,end,timeout

// Q3. Timers registered out of order 
/*
setTimeout(() => console.log('100ms'), 100);
setTimeout(() => console.log('0ms-A'), 0);
setTimeout(() => console.log('50ms'), 50);
setTimeout(() => console.log('0ms-B')); //the delay defaults to 0 milliseconds. if u dont give second parameter
// the order they register setTimeout(() => console.log('0ms-A'), 0); and setTimeout(() => console.log('0ms-B'));  they will execute on that way 
console.log('sync');
*/
//sync, 0ms-B 0ms-A, 50ms, 100ms //Incorrect

//Q4. Timers inside promises, promises inside timers -> 
// Most Important Question to understand whole mechanism of EventLoop ROLE on microtask and callback queue
/*
setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => console.log('P-in-T1'));
}, 0);
setTimeout(() => console.log('T2'), 0);
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => console.log('T-in-P1'), 0);
});
*/
//P1,T1,P-in-T1,T2,T-in-P1

//Q5 var vs let with setTimeout (Closure + Event Loop) 
/*
for (var i = 0; i < 3; i++) setTimeout(() => console.log('var', i), 0);
for (let j = 0; j < 3; j++) setTimeout(() => console.log('let', j), 0);
*/
//3,3,3
//0,1,2

// Q6. async/await ordering (classic product-company question)
/*
async function foo() {
  console.log('foo start');
  await bar();
  console.log('foo end');
}
async function bar() { console.log('bar'); }

console.log('script start');
setTimeout(() => console.log('timeout'), 0);
foo();
Promise.resolve().then(() => console.log('promise'));
console.log('script end');
*/
//script start, foo strat, bar, foo end, script end, promise, timeout -Incorrect

// Q7. Interleaving promise chains -> Need to study about more promise and promise chaains 
//will be covered on next season of namaste JS
/*
Promise.resolve()
  .then(() => console.log('a1'))
  .then(() => console.log('a2'))
  .then(() => console.log('a3'));
Promise.resolve()
  .then(() => console.log('b1'))
  .then(() => console.log('b2'));
*/
//Incorrect

//Q8 The Promise executor is synchronous
/*
console.log(1);
const p = new Promise((resolve) => {
  console.log(2);
  resolve(3);
  console.log(4);
});
p.then(v => console.log(v));
setTimeout(() => console.log(5), 0);
console.log(6);
*/
//Incorrect

// Q9. Microtask starvation
/*
let count = 0;
setTimeout(() => console.log('timeout, count =', count), 0);
function loop() {
  if (count < 100000) {
    count++;
    Promise.resolve().then(loop);
  }
}
loop();
*/
//incorrect

// Q10. queueMicrotask + nested scheduling // Imp _ques
//queueMicrotask fn -> add the callback fn to execute them in the micro task queue 
/*
setTimeout(() => console.log('T'), 0);
queueMicrotask(() => {
  console.log('M1');
  queueMicrotask(() => console.log('M2'));
  setTimeout(() => console.log('T-from-M1'), 0);
});
Promise.resolve().then(() => console.log('P'));
console.log('S');
*/
//S, M1 , P, M2, T, T-from-M1

// Q12. Expired timers + the setTimeout gotcha
/*
setTimeout(() => console.log('A'), 1000);
setTimeout(console.log('B'), 0);   // ⚠️ look closely
const s = Date.now();
while (Date.now() - s < 1500) {}    // block for 1.5s
setTimeout(() => console.log('C'), 0);
console.log('D');
*/
//D, B, A,C -Incorrect