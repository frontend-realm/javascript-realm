// setTimeout + Closures Interview Question : 

// 1.
/*
function x1() {
    var i = 1;
    setTimeout(function () {  // this function witout name is a callback function and its also forming closure as well.
        console.log(i);
    }, 5000 );
    console.log('Js Realm');
}
x1();
*/

//2 -> most asked tricky JS interview.
// print 1 to 5 after each second each
//or as a output question mostly asked as a output question 
/*
    for(var i = 1 ; i <=5; i++ ) {
        setTimeout(function () {
            console.log(i)
        }, i* 1000)
    }
*/

// how to fix as it output is 6 -> 5 times should be 1  2 3 4 5
// solution 1 -> change var to let as let is block scoped for every iteration it will create a new memory space for i in block space and i refer to that block space memory i
// solution 2 -> mostly interviewer dont fgive shit on changing to let they will say fix with var only than use closure to fix this one. - closure plays the important role here.
// solution 2 - fixing this with var only using closure.

for (var i = 1; i <= 5; i++) {
    function useClosure(printNum) {
        setTimeout(function () {
                console.log(printNum)
        }, i * 1000)
    }
    useClosure(i)
}