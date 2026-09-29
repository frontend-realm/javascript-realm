//Two Major Drawbacks of callback:
//i)Callback Hell and How it is created
const  cart = ["Shoes", "wallet","Pant","Shirt"];

//Look the whole nested structure this is what callback hell looks like dependency of one callback to another makes or create a calback hell
//Each operation is nested inside the previous operation's callback.
//This deeply nested structure is called callback hell.
//Callback hell occurs when multiple callbacks are nested inside one another, usually to manage dependent asynchronous operations.
api.createOrder(cart, function() {
    api.proceedPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})

/* Why callback hell is a problem:

    Why does it become a problem?

    Readability: The code becomes difficult to follow because of deep nesting.

    Maintainability: Adding or modifying operations becomes harder.

    Error handling: You may need to handle errors separately at every level.

    Debugging: Tracking where something went wrong becomes more complicated.

    **Callbacks themselves are not bad. The problem is excessive nesting and the complexity it creates.

*/

//Real Example :
function getUser(callback) {
    setTimeout(() => {
        callback({ id: 101, name: "Ritesh" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        callback(["ORD101", "ORD102"]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        callback({ orderId, amount: 2500 });
    }, 1000);
}

//callback hell is created here to get dependent data to move the operation further
getUser((user) => {
    console.log(user);

    getOrders(user.id, (orders) => { //user id from getUser()
        console.log(orders);

        getOrderDetails(orders[0], (order) => { //order id from getOrder 
            console.log(order);
        });
    });
});
//check this nested dependent operation creates a callback hell.

/*
    Interview-ready definition

    Callback hell is a situation in JavaScript 
    where multiple nested callbacks are used to handle dependent asynchronous operations, 
    making the code difficult to read, maintain, and debug. It is also known as the Pyramid of Doom. 
    Promises and async/await help avoid this excessive nesting.
*/

// ii) Inversion Of Control

 api.createOrder(cart, function() {
    api.proceedPayment()
}) // we are giving control of proceed payment function to create order payment function. this is what inversion of control is