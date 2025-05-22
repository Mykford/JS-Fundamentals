const args = process.argv.slice(2);

firstArg = parseInt(args[0]);

function factorial(n) {
    if (n === 0 || n === 1 ) {
        return 1;
    }if(isNaN(n)){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(firstArg));