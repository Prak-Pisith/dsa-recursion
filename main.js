function factorial(n) {
    console.log("n: ".concat(n));
    // Based Case
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var result = factorial(5);
console.log("Result: ".concat(result));
