// Iteration
function walkIteration(steps: number): void {
  // Using Iteration
  for (let i = 1; i <= steps; i++) {
    console.log(`You take step ${i}`);
  }
}

// Recursion
function walkRecursion(steps: number) {
  // Base Case
  if (steps === 0 ) {
    return;
  }
  console.log(`You take step ${steps}`);
  walkRecursion(steps - 1);
}

// walkIteration(5);
walkRecursion(5);

