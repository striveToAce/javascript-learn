/*understand below closure concept <<focus on timeout variable>>*/
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        console.log(timeout,"_timeout_")
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

const debouncedFunction = debounce(() => {
    console.log("Debounced!");
}, 300);

//window.addEventListener("resize", debouncedFunction);


/*throttling*/
function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}

const throttledFunction = throttle(() => {
    console.log("Throttled!");
}, 1000);

//window.addEventListener("scroll", throttledFunction);
