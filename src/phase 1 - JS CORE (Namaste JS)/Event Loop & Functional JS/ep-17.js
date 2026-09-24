// i) Blocking the main thread and trust issue with settimeout
/*
    console.log("Start");

    setTimeout(function cb() {
        console.log("Callback");
    }, 5000);

    console.log("End");

    // million

    let startDate = new Date().getTime();
    let endDate = startDate;

    while (endDate < startDate + 10000) {
        endDate = new Date().getTime();
    }

    console.log("While expires");
*/

/*
    Start
    ↓
    setTimeout registered → Web API
    ↓
    End
    ↓
    while loop blocks Main Thread for ~10 seconds
    ↓
    5 seconds → timer expires
    ↓
    Callback → Callback Queue
    ↓
    BUT Call Stack is still busy ❌
    ↓
    ~10 seconds → while loop finishes
    ↓
    Call Stack becomes empty
    ↓
    Event Loop moves Callback → Call Stack
    ↓
    Callback
*/

// ii) setimeout with 0:
console.log("start")

setTimeout(function cb0() {
    console.log("callback executes for cb0")
},0)

setTimeout(function cb1() {
    console.log("callback executes for cb1")
},7000)

setTimeout(function cb2() {
    console.log("callback executes for cb2")
},5000)


console.log("End")