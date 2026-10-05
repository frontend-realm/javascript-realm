const cart = ["shoes","shirt","pant"];

//a) Performing Async Operations Using Callbacks.
/* 
    function callbackFn() { //proceed the payment using orderID
        proceedPayment(orderId);
    }

    createOrder(cart,callbackFn); //passing the callbackfunction to get orderID from create Order api and just passing to the proceed payment api 
*/
//Here there are are two api calls which is a asynchronous tasks , so we are using callbacks to perform these async task 
//But Using Callbacks have an issue thats is -> Inversion of control we are giving full control of our function to another 
//to solve this inversion of control and callback hell we will go with promises 

//b) PROMISES:

/* 
    createOrder is an api call an async operation which takes time , and returns a promise, an object  which can later execute by 
    callback function attaching to the promise Obj by using .then() function.

    promise is object
*/
// const promise = createOrder(cart); 

/*
    see JS engine will not wait so it will execute line by line and when reaches to promise line it will give a empty object
    with undefined data as async operation will take time once data come it get filled in the object with data automatically 
    and than then function is called so JS didnt wait it keeps executing and promise handled it very smoothly this async operation

*/

/*
    promise.then(function () {
        proceedPayment(orderId);
    })
*/

//c) Callback Vs Promises:
// passing the function to other function and giving them the control to call and execute 

//in promises we attach the callback function to the promise object using .then() function and get quarrenteed that when
//Prombise Object data is come it will call the calback function once and execute it.


//d) Promises Object Deep Dive.

const url = "https://api.github.com/users/ranjanritesh22";

const promiseObj = fetch(url); // this fetch returns a promise which can be captured in a variable;

console.log(promiseObj)

promiseObj.then(function (response) { //attching a callback function to the promise object and its gets automatically called when the promise is on fulfiled state.
    console.log(response);
})

// e) Promise Chaining

//Promise chaining helps in to prevent from callback hell or the pyramid of doom 

let apiRes = createOrder(cart); //suppose return a promise than we can do like below right

//this is how we can chain a series of apis if returning promise each and dependent to each other to work
//promise chaining to prevent from causing callback hell or pyramid of doom  if we had use passing these callbackfunctions to the other funtion.
createOrder(cart)
.then(function () {
    return fetchOrderDetails(orderId);
})
.then(function () {
    return proceedToShip(orderId);
})
.then(function () {
    return updateCart(cartId);
}) 

