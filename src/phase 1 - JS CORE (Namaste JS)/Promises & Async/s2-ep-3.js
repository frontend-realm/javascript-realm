// 1.) All about creating a promise
//Consuming Part of Promise
// This Whole part is we say we are consuming the promise  - saw in s2-ep-2 -> {Consumer Part}
//const cart = ["shoes", "Pants", "Shirt"]; // to simulate a valid cart
const cart = false // to test a invalid cart so that we can reject the promise and see what happens that time.

const createOrderPromise = createOrder(cart); //this is an api call which will return orderId
console.log(createOrderPromise);

createOrderPromise
//.then when promise is fullfiled or resolved
.then(function (res) {
    console.log(res); // print the order id we resolved from promise when state is full filled;
    //getOrderDetails(orderId) //when promise is fullfiled data is fetched we get orderId from the createOrder api call and we will use in getOrderDetails with orderID
})
//.catch when promise is rejected we attach a callback for error handling
//2) Error Handling
.catch(function (err) {
    console.log(err.message)
})


//*********************************************************************************************************************************** */

//Creation Part Of Promise
// How can we create a promise  -> createOrder()  -> How we can create this so it should return me a promise. {Producer Part}
//create a Promise stimulation
function createOrder(cart) {
    const pr = new Promise(function (resolve,reject) {
        //createOrder
        //validateCart
        //we will get orderID on success and error when error comes

        //validation not passed , invalid cart than reject our promise with error 
        //reject our promise
        if(!cart) {
            const err = new Error("cart is not valid");
            reject(err);
            //2) Errors and Error Handling -  rejected promise
            // we will get red color error in the console that means we didnt handled our error or exception we got in the browser
        }

        const orderId = "12345";
        //if our orderID is valid we will resolve our promise a success by sending orderid
        //promise have two things most important -> (fullfilled state -> resolved) or (rejected state -> reject);
        //resolved our promise
        //right now it is clear synchronous process in whole to make it async to show promise real behavoiur we need to add some delay
        if(orderId) {
            //now this settimeout will add some extra delay to resolve this promise
            //basically now promise will now resolve after 5 sec making it async task
            setTimeout(() => resolve(orderId), 5000);
        }
    })
    //return the promise so createOrder function can return the promise.
    return pr;
}

////////////////************************************************************************* */
//3)Promise Chaining
/*
createOrder,
proceedToPayment,
showOrderSummary,
updateWallet
*/


