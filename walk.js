// Iteration
function walkIteration(steps) {
    // Using Iteration
    for (var i = 1; i <= steps; i++) {
        console.log("You take step ".concat(i));
    }
}
// Recursion
function walkRecursion(steps) {
    // Base Case
    if (steps === 0) {
        return;
    }
    console.log("You take step ".concat(steps));
    walkRecursion(steps - 1);
}
// walkIteration(5);
walkRecursion(1000000);
