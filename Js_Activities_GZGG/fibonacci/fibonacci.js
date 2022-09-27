/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        //TODO: Implement the fibonacci function here!

        memo[n] = value;
        let n1 = 0, n2 = 1, nextN;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextN = n1 + n2;

while (nextN<= value) {

    // print the next term
    console.log(nextN);

    n1 = n2;
    n2 = nextN;
    nextN = n1 + n2;
}
    }

    return value;
}
console.log(fibonacci(15));


