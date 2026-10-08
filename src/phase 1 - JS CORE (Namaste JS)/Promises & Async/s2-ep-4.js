
const p1 = new Promise((resolve,reject) => {
    //for sucess case demo 
    // setTimeout(() => resolve("P1 Successs"), 3000);

    //for failure or rejected case demo
    setTimeout(() => reject("P1 Fails"), 3000);

});

const p2 = new Promise((resolve,reject) => {
    //for sucess case demo 
    // setTimeout(() => resolve("P2 Successs"), 1000);

    //for failure or rejected case demo
    setTimeout(() => reject("P2 Fails"), 1000);
});

const p3 = new Promise((resolve,reject) => {
    //for sucess case demo 
    // setTimeout(() => resolve("P3 Successs"), 2000);

    //for failure case demo
    setTimeout(() => reject("P3 Fails"), 2000);

});

//Promise.all api 
Promise.all([p1,p2,p3]).then( (res) => {
    // console.log(res);
})
.catch((err) => {
    // console.error(err)
})

//promise.allsettled api -> it will wait to all settled and will return the value with all doesnot matter fail or success
Promise.allSettled([p1,p2,p3])
.then((res) => {
    // console.log(res);
})

/* this is what Promise.allsettled return
[
    {
        "status": "fulfilled",
        "value": "P1 Successs"
    },
    {
        "status": "rejected",
        "reason": "P2 Fails"
    },
    {
        "status": "fulfilled",
        "value": "P3 Successs"
    }
]
*/

//Promise.race api : it will return the value of first settled promise doesnot matter its success or fail
//first settled promise , doesnot matter resolve or reject
// race down the first settled promise doesnot matter it is a fail or a success it will return the value as fail if fail sucess if sucess if it is first settled up
Promise.race([p1,p2,p3])
.then((res) => {
    // console.log(res);
})
.catch(err => {
    // console.error(err);
})

//Promise.any api : it will return the first success settled promise , like it is a success seeking promise api any 
//basically any means any suceess promise in the input return that value first settled sucess 

Promise.any([p1,p2,p3])
.then((res) => {
    console.log(res);
})
.catch(err => {
    // console.error(err);

    //handle the aggregate error -> it will create an array of errors aggregate error 
    console.log(err.errors)
})

/*
    [
        "P1 Fails",
        "P2 Fails",
        "P3 Fails"
    ]
*/

// return if all promise fai  led and any api could not find the first success settled it will throw 
//wait for first settled sucess 
// AggregateError: All promises were rejected