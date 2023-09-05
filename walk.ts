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
  walkRecursion(steps - 1); // Recursion, Add frame to the call stack
  // Add all frames to the call stack, then the console start working
  console.log(`You take step ${steps}`);

  /* 
    Call Stacks (LIFO)
     - walkRecursion(0) => matched base case => return
     - walkRecursion(1) => executed => You take step 1
     - walkRecursion(2) => executed => You take step 2
     - walkRecursion(3) => executed => You take step 3
     - walkRecursion(4) => executed => You take step 4
     - walkRecursion(5) => executed => You take step 5
     - main()
  */
}

// walkIteration(5);
walkRecursion(5);

