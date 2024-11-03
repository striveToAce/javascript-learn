/*
The Proxy Pattern provides a placeholder or surrogate object that controls access to another object. Proxies are useful for lazy initialization, access control, logging, caching, and more.

Use Cases: Security proxies (restricting access), virtual proxies (lazy loading), logging proxies (keeping track of method calls), and caching proxies.
*/
class RealAPI {
    fetchData() {
        console.log("Fetching data from the real API...");
        return "Data from the real API";
    }
}

class APIProxy {
    constructor() {
        this.realAPI = new RealAPI();
        this.cache = null;
    }

    fetchData() {
        if (!this.cache) {
            console.log("Cache is empty. Fetching data...");
            this.cache = this.realAPI.fetchData();
        } else {
            console.log("Returning cached data...");
        }
        return this.cache;
    }
}

const apiProxy = new APIProxy();

console.log(apiProxy.fetchData()); // Output: "Cache is empty. Fetching data..." and "Data from the real API"
console.log(apiProxy.fetchData()); // Output: "Returning cached data..." and "Data from the real API"
