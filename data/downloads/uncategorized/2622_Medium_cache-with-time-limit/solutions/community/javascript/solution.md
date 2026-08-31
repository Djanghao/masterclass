# [JavaScript] SHORT & SIMPLE O(n) solution using setTimeout

**Author:** jwseph
**Votes:** 108
**Link:** [https://leetcode.com/problems/cache-with-time-limit/solutions/3406927/](https://leetcode.com/problems/cache-with-time-limit/solutions/3406927/)

---

# Approach
1. Use `setTimeout` to remove items from the cache.
2. If a key already exists in the cache, cancel its timeout.

- Overall time/space complexity: $$O(n)$$

# Code
```js
const TimeLimitedCache = function() {
    this.cache = new Map();  // Using Map so we don't need a size variable
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
    this.cache.set(key, {
        value,  // Equivalent to `value: value`
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};
```