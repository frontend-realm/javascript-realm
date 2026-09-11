// scope and lexical env

function a() {
    b(); 
    function b() {
        console.log(x);
    }
}

let x = 10;
a();


/*. Good Example to understand the lexical and scope chain

let a = 10;

function x() {
    a = 20;
    y();
    function y () {
        a = 30;
        var b = 20;
        z();
        function z() {
            console.log(a);
            console.log(b);
        }
    }
}

x();

console.log(a);

*/