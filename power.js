function power(base, exponent) {
    // Base case
    if (exponent < 1)
        return 1;
    return base * power(base, exponent - 1);
}
var exResult = power(2, 8);
console.log(exResult);
