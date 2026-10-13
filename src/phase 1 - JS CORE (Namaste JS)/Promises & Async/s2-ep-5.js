// a) async functions
/*
    Async functions always return the promise always if you send a value normally from the function as shown below 
    it will wrap this is in a promise and will return but it always return a promise from this async functions if you make
    For Example Below:

    In console will print like this 
    Promise {<fulfilled>: 'Ritesh Ranjan'}

    Either you directly return a promise or not a promise a value a boolen object it will wrap them as a promise and will return promise 
    from this async functions
*/
//Demo 1. - normal value returned from async function.
async function name() {
    return "Ritesh Ranjan"
}

const namePromise = name(); // as the async function always return the promise so promise stored in the variable

//And as namePromise is a promise now we can attach a callback with .then() to get the exact value or a data
/*
    earlier we have to create promise we needed new Promise constructor to call and get resolve and reject now by just async function or async keyword
    we are getting promise as these function with async keyword returns a promise from their function.
*/
// namePromise.then((res) => console.log(res))

//Demo 2. - return a promise from async function what will be the value - will it wrap it to another promise or simple it will detect it as promise and return a promise
const promise1 = new Promise((resolve,reject) => resolve("promise 1 resolved"));

async function promise1withasyncfunction() {
    return promise1;
}

//similar output as demo 1 here no wrapping and all again in new promise it will return as it will check its a promise already simply return a promise in async function logic 
// console.log(promise1withasyncfunction());

//b) Using Await with Async ->
//Async/Await  - using await with async to handle promise and await only used inside the async 

//promise created
const dataPromise = new Promise((resolve,reject) => resolve("data fetched succefully"));

//await can only be used inside a async function to handle a promise
async function fetchData() {
    //using await here to handle the promise - dataPromise
   const dataValue =  await dataPromise; //putting await keyword in front of the promise as per deifinition of await
   console.log(dataValue);
}

// fetchData()

//c) Divining Deep into async - await 
/*
    Difference of handling a promise using async - await and by older way .then() attaching a callback to it onto the promise
*/

//created a promise fetchuser with timer to fake like it is coming from api
const fetchUserPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("user Data Fetched Succefully");
    },10000)
})

// first way  - handling promise fetchUserPromise by async - await
async function fetchUserByAsyncAwaitWay() {
    console.log("....Loading");
    //program will wait over here  await  - await fetchUserPromise
    const isUserFetched = await fetchUserPromise;  //here JS engine waits and didnt let below code to execute until promise is resolved after 10 seconds once it got resolved than below code starts to executed .
    console.log("...Loading removed");
    console.log(isUserFetched);
}

//second way - handling promise fetchUserPromise by .then() and attaching callback to promise
function fetchUserByThenWay() {
    let isUserFetched
    console.log("....Loading");
    fetchUserPromise.then(res => {
        isUserFetched = res;
        console.log(isUserFetched);
    }); 
    console.log("...Loading removed");
}

// This was the major and most important difference between them handling promise using async - await and .then()
/*
    By using the .then() way we see that promise resolved after 10 seonds until than JS Engine will not wait it will execute 
    as we have seen in event loops and callback queue and microstack queue behaviour how they work together in JS Enginer

    so loading and loding removed will come immediatedly as they executed in callstack and when promise resolved from microstack queue 
    after 10 seconds it will execute in the callsatck and we will see the value user fetched succefully in console 
    but here after 10 seconds promise resolve and we see the value but the consoles synchrounous task executed quicky so the behavour is little bit sloppy
*/
/*
    But in async await at line number 66 - const isUserFetched = await fetchUserPromise; 
    there JS engine wait and didnt execute after that it waits to resolve the promise and than execute the code below that line 
    that behavour actually really impressive and a super power of async and await to see that JS engine waits to resolve the promise
*/

// fetchUserByAsyncAwaitWay();
// fetchUserByThenWay();

//d) More Cases and Explanation and behind the scenes on async await

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("p1 resolved"), 10000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("p2 resolved"), 5000);
})

//under one async function we can handle two promise using await to get thier values
async function getValue() {
    console.log("find Value");

    const p1Val = await p1;
    console.log(p1Val);

    const p2Val = await p2;
    console.log(p2Val);
}

/*
    there is a contradiction on that const p1Val = await p1; on this one that JS engine waits here thats not right 
    js didnt wait for any one it will execute , 

    //program will wait over here  await  - await fetchUserPromise , it is not true it looks like it is waiting but its not true otherwise if 
    the statement wrote earlier it was not true it was a contradiction now it looks like waiting but its not JS engine doesnot wait for anyone is always true
    Than what is happening than what is behind the scenes and actually happening ?
*/

/*
    so behind the scene and how actually these programmes works ?
    js engine will never stops the programme call stack is one behind the scenes
    when await is there and checks promise is not resolved 
    async function getValue() it suspend this function from the callstack , and continue once the promise is resolved 
    once promise is resolved you will see again in the callstack the async function is back again and continue to executing
    
    async function getValue() in callstack
     const p1Val = await p1; if not resolved  -> getValue suspended and popped out from callstack
     once const p1Val = await p1; is resolved  -> popped in again inside the callstack and continue the execution
     and as we know JS is single threaded synchrounous language so line by line its starts executing.

    so async await never blocks or stops the callstack it looks like they are doing but behind scene it is not 
    JS engine never stops it keeps exxecuting and didnt wait for none.

*/

//getValue();

/* Best Demo Explanation For the behind Scenes of async - await works -

    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => resolve("p1 resolved"), 5000);
    })

    const p2 = new Promise((resolve,reject) => {
        setTimeout(() => resolve("p2 resolved"), 1000);
    })

    async function getValue() {
        console.log("find Value");

        const p1Val = await p1;
        console.log(p1Val);

        const p2Val = await p2;
        console.log(p2Val);
    }

    console.log("started")
    getValue();
    console.log("ended")


    
        logs -> started 
        and than calls the function getValue -> and logs find value
        but as per we learned earlier that await will stop the execution so it should print  p 1 resolved first than p2 resolved than should at end
        logs the ended value  but not as we learned in behind scenes the suspension of async function when promise is not resolved 
        it will popped out from callstack making space for callstack to continue for other to execute

        so out put will be 
        started
        findvalue 
        not resolve p1 suspend the async function popped out from callstack
        logs -> ended 
        once promise resolve popped in again in callstack and logs the 
        p1 resolved 
        p2 resolved
    
*/



//GitHub Api call using async await: Real world example
// And Error handling using async await: the try - catch block
//Try - Catch Block
const API_URL = "https://api.github.com/users/ranjanritesh22";

async function getGithubDetails() {
    try {
          const response = await fetch(API_URL);
        // fetch gives u -> response is a readable stream -> now when response.json() is done to get exact object -> promise 
        const data  = await response.json();

        console.log(data) // it will give you object of data of github
    } catch(err) {
        console.log(err)
    }
  
}

getGithubDetails();