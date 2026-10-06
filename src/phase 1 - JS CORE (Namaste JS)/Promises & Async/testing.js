
const cart = ["shoes", "Pants", "Shirt"]; 

// creating a promise chain with these fake dummy apis and small dummy data to show the flow of the chain
/*
    createOrder, // giues -> orderid
    proceedToPayment needed orderid -> to givepaymentId,
    showOrderSummary needed paymentId to get userId,
    updateWallet -> userId needed to update walled for that user
*/

createOrder(cart)
.then(function (res) {
    return proceedToPayment(res); //adding return is needed we are returning promise from a promise to pass on data downwards in the chain
})
.then(function (res) {
  return showOrderSummary(res)
})
.catch(function (err) {
    console.log(err.message)
})
.then(function (res) {
   return updateWallet(res) 
})
.then(function (res) {
    console.log(res)
})


function proceedToPayment(orderId) {
    return new Promise((resolve,reject) => resolve("payID1"));
}

function showOrderSummary(payID) {
    return new Promise((resolve,reject) => reject(new Error("Network Issue")));
}

function updateWallet(userId) {
    return new Promise((resolve,reject) => resolve("updated wallet"));
}

function createOrder(cart) {
    const pr = new Promise(function (resolve,reject) {

        if(!cart) {
            const err = new Error("cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        if(orderId) {
            setTimeout(() => resolve(orderId), 5000);
        }
    })
    return pr;
}