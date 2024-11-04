/*
Memory Life Cycle in JavaScript
Memory Allocation: Memory is allocated when variables, objects, or data structures are created.
Memory Use: The allocated memory is used during code execution.
Memory Release: Unused memory is released and reclaimed by the garbage collector.
Garbage Collection
JavaScript uses automatic garbage collection to manage memory. The garbage collector reclaims memory occupied by objects that are no longer accessible.
*/


/*
Common Memory Management Techniques
Avoid Memory Leaks:
Global Variables: Avoid creating too many global variables, as they stay in memory until the application ends.
Detached DOM Elements: Ensure that DOM elements are properly removed and not referenced by JavaScript code after being detached.
Timers and Callbacks: Clear intervals and remove event listeners when they are no longer needed.
*/




function memoryLeak() {
    let largeArray = new Array(1000000).fill("data");

    setInterval(() => {
        console.log("Interval running");
        // `largeArray` is still referenced, causing a memory leak
    }, 1000);
}

memoryLeak(); // This function creates a memory leak


function memorySafe() {
    let largeArray = new Array(1000000).fill("data");
    const intervalId = setInterval(() => {
        console.log("Interval running");
        // Clear the interval if necessary
    }, 1000);

    // Example: Clear the interval after 5 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        largeArray = null; // Free up memory
    }, 5000);
}

memorySafe();
