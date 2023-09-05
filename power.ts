function power (base: number, exponent: number): number {
  // Base case
  if (exponent < 1) return 1;
  return base * power(base, exponent - 1);
}

const exResult: number = power(2, 8);
console.log(exResult);