function factorial (n: number): number {
  console.log(`n: ${n}`);
  // Based Case
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial (n - 1);
  }
}

const result = factorial(5);
console.log(`Result: ${result}`);