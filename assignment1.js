function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
console.log( typeof foo() );      //output = string

function foo() {
    return x;
    x = 1;

    function x() { }

    var x = '2';                //Output:- function
}
console.log( typeof foo() ); 

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}             //Output: 1
}
foo();
console.log( x );
   