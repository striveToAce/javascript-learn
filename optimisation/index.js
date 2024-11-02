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
