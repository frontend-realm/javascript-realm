//a) what is a callback function in js

/* 
    As we know functions are first class citizens so a function can be pass as 
    argument to another function and the function which we are passing to another 
    function is what callback functions are

    fn1 - passed as argument to fn2 

    now fn1 which is passed as argument to fn2 is the callback functions
    so fn1 is the callback function

*/

//eg 
/*
    function x(y) { 
        console.log("called x");
        y();
    }
    //so now 
    x(function y() {"called y"}) // passing y as a argument to x function so y function is the callback function here
*/

//b) JS is synchronous and single threaded language 
// asynchrounous task how callback works
// setTimeout(function () {console.log("Timer")} , 5000);
/* 
    we have add a callback function on the setTimeout which is a async task basically JS will not wait for 5sec 
    first execute this than other , JS waits for none so in this async tasks like what will happen 
    JS will execute but when it sees async task it will attach a timer and when timer expires the 
    callback function we pass in the settimeout as callback will start to execute,
    this is how JS executes a asyn task and works with callback collectively together.


    so async tasks where not posiible if callback doesnot exists
*/

//to see proper demo go to dev tools watch callstack properly.
//JS has one callstack you can say as main thread  all the functions execute on a page which goes from one callstack only

//c) Blocking the main-thread - 
// Never block main thread the call stack its bad code and bugs can occur

//d) Power callbacks and more about block main-thread or callstack :
/*
    JavaScript is single-threaded, so long-running synchronous code blocks the call stack/main thread. 
    Asynchronous APIs allow the work to happen outside the call stack, and their callbacks are scheduled to run later 
    when the call stack is available.
*/


/*
    Callbacks themselves don't make a task asynchronous.
    APIs like setTimeout, fetch, DOM events, etc. are asynchronous and 
    use callbacks to tell JavaScript what to execute later.
*/

//Some Demos to understand this main-thread block and callbacks used in async task


// Below is the example of blocking callstack :
//Demo-1:
/*
    bad code it will wait until the function executed than it will execute the later piece of code which is not good 
    it is blocking callstack always use async task to do this things never block the main thread
*/

//Not using callbackfunction
/*
    function blockMainThread() {
        console.log("Blocking started");

        const start = Date.now();

        while (Date.now() - start < 5000) { //here it will block the callstack after 5 second again this function will pop in callstack
            // Keep doing nothing for 5 seconds
        }

        console.log("Blocking finished");
    }

    console.log("Before");

    blockMainThread();

    console.log("After");
*/

/* 

    For 5 seconds, the JavaScript main thread is completely occupied.

    During those 5 seconds, try to:

    click buttons
    scroll the page
    type somewhere
    open a dropdown
    interact with the UI

    The browser will feel frozen/unresponsive.

*/

//Using Callback
/*
    console.log("Before");

    setTimeout(() => {
        console.log("Callback executed");
    }, 5000);

    console.log("After");
*/

//Explanation of above demo -1 :
/*
    Call Stack
    ↓
    setTimeout()
    ↓
    callback registered
    ↓
    Call Stack becomes empty
    ↓
    JavaScript can continue doing other work
    ↓
    5 seconds later
    ↓
    callback → Call Stack
*/

// So setTimeout() doesn't sit on the call stack for 5 seconds.

// e) Deep about Event Listners:
/*
    when button is clicked what happens same this function is stored somewhere and button 
    clicked the function the callback function we have written here will execute 
    and pushed it in to callstack and when function execution over popped out from callsatack.
*/

/*
    document.getElementById('clickMe')
    .addEventListener("click", function () {
        console.log('clicked')
    })
*/

//f) Closures Demo with Event Listeners
//Demo 2- Increase Count when button is clicked ? or check how many times button is clicked.

function calCout() {
    let count = 0;

    document.getElementById('clickMe')
    .addEventListener("click", function button() {
        console.log('clicked');
        count ++;
        console.log(count)
    })

}

calCout();

// Go to dev tools , and check the flow using  debugger 
// go to elements in inspect and check eventlisteners on inspect on elements and check scopes 
// check scopes it will change from zero to count ++ as button clicked 

//g) Garbage Collection and removeEventListeners