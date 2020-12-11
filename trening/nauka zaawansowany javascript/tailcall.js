function factorial(n) {
    console.trace();
    if(n>1) return factorial(n-1)*n;
    else return 1;
}

console.log(factorial(5));

function factorial(n) {
    if (n > 1) return factorial(n-1) * n;
    else throw Error;
}

console.log(factorial(5));


// cwiczenie 1
function primeCheck (prime, n){
    if(typeof n === 'undefined') {
        n = Math.floor(prime / 2);
    }
    if(prime % n == 0)
    {
        if(n > 1){
            return false;
        }
        return true;
    }
    return primeCheck(prime, n-1);
}

