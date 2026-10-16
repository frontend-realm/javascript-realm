//Q1. Inversion of control vs promise trust (S2 EP1) 
/*
function unreliableApi(cb) {cb('first'); cb('second'); }
unreliableApi(v => console.log('callback:', v));
const p = new Promise(resolve => unreliableApi(resolve)); 
p.then(v => console.log('promise:', v));
*/
//callback:,first
//callback:,second
//error  - Incorrect

// Q2. Settle once, ignore the rest (S2 EP3) 🟢
/*
const p1 = new Promise(() => { throw new Error('boom'); });
p1.catch(e => console.log('p1:', e.message));
const p2 = new Promise((resolve, reject) => { resolve('ok'); reject(new Error('r')); throw new Error('ignored'); });
p2.then(v => console.log('p2:', v)).catch(e => console.log('p2 err:', e.message));
*/
//not rejected or resolved just callback was passed , resolved p2: ok - Incorrect

//Q3. Resolving with a rejected promise (S2 EP3) 🟡
/*
const p = new Promise((resolve) => {
  resolve(Promise.reject(new Error('inner')));
});
p.then(v => console.log('then:', v))
 .catch(e => console.log('catch:', e.message));
console.log('state check');
*/
// then: promise object rejected , state -check

//Q4. The missing return (S2 EP3) 
/*
Promise.resolve(1)
  .then(x => { x + 1; })
  .then(x => console.log('A', x))
  .then(() => 10)
  .then(x => console.log('B', x));
*/
//A undefined, B - 10 

// Q6. finally is transparent (S2 EP3) 
/*
Promise.resolve('start')
  .then(v => { throw new Error(v + '-fail'); })
  .then(() => console.log('skipped'))
  .finally(() => console.log('finally'))
  .catch(e => console.log('caught', e.message))
  .then(v => console.log('end', v));
*/
//skipped, finally, start - fail end -Incorrect

//Q7. then() with non-functions (S2 EP2) 🔴
/*
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log);
*/
//3 - Incorrect

//Q8. then's second argument vs .catch (S2 EP3) 🔴

Promise.resolve('ok')
  .then(
    v => { throw new Error('from success handler'); },
    e => console.log('second arg:', e.message)
  )
  .catch(e => console.log('catch:', e.message));

//second arg , undefined -Incorrect

//Q10. Promise.all keeps input order (S2 EP4) 🟡
// Promise.all([delay(300, 'A'), 'B', delay(100, 'C'), 42]).then(console.log);

// Promise.all([4,45,'A']).then((res)=> console.log(res))

// Q11 Fail fast does not mean cancel (S2 EP4) 🔴

// Promise.all([
//   delay(300, 'A').then(v => { console.log('A done'); return v; }),
//   delay(100, 'B', true),
//   delay(200, 'C').then(v => { console.log('C done'); return v; }),
// ]).then(console.log).catch(e => console.log('rejected:', e));

//

//Q12. Promise.any vs Promise.allSettled timing (S2 EP4) 🟡

function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? reject(value) : resolve(value);
    }, ms);
  });
}

// Promise.any([delay(100, 'x', true), delay(200, 'y', true), delay(150, 'z')])
//   .then(v => console.log('any:', v))
//   .catch(e => console.log('any errors:', e.errors));


//any errors: x.  , 

//Q13. Race ties go to array order (S2 EP4)
/*
Promise.race([delay(0, 'timer'), Promise.reject('instant fail'), 'plain'])
  .then(v => console.log('win:', v))
  .catch(e => console.log('lose:', e));
*/
//

//Q14. Combinators with an empty array (S2 EP4) 🔴
// Promise.all([]).then(v => console.log('all', v));
// Promise.allSettled([]).then(v => console.log('allSettled', v));
// Promise.any([]).catch(e => console.log('any', e.constructor.name, e.errors));
// Promise.race([]).finally(() => console.log('race settled'));
// console.log('sync');

//Q15. try/catch can't catch an un-awaited async function (S2 EP5) 🟡
/*
async function validateCart(cart) {
  if (!cart.length) throw new Error('empty cart');
  return 'valid';
}
try {
  validateCart([]);
  console.log('after call');
} catch (e) {
  console.log('try/catch:', e.message);
}
validateCart([]).catch(e => console.log('.catch:', e.message));
console.log('end');
*/
