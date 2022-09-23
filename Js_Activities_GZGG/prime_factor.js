/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/


function isPrime(n) {
    var i;

    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

function getPrimeFactors (n) {
var sequence = [];
for(let i = 0;i <= n; i++){
   if (isPrime(i)&& n % i === 0 ){
     sequence.push(i);
   }
    if (isPrime(n)){
     sequence.push(n);
   }
  
}
return sequence;
};






//TODO: Check which numbers are factors of n and also check if
// that number also happens to be a prime


// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));