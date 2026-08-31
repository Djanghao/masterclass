# Simple yet intuitive solution

**Author:** FrankieC
**Votes:** 3
**Link:** [https://leetcode.com/problems/deep-merge-of-two-objects/solutions/3807283/](https://leetcode.com/problems/deep-merge-of-two-objects/solutions/3807283/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Treat array as object also, the for in loop will also work on arrays with key is the index

# Code
```
/**
 * @param {any} obj1
 * @param {any} obj2
 * @return {any}
 */
var deepMerge = function(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj2;
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return obj2;
    if (obj1 === null || obj2 === null) return obj2;
    const res = obj1;
    for (const key in obj2) {
        if (key in res) {
            res[key] = deepMerge(res[key], obj2[key]);
        } else {
            res[key] = obj2[key];
        }
    }
    return res;
};

/**
 * let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
 * deepMerge(obj1, obj2); // {"a": 2, "c": 3, "b": 2}
 */
```