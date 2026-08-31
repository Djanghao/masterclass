# Using Map and Symbol

**Author:** Vladislao
**Votes:** 45
**Link:** [https://leetcode.com/problems/memoize-ii/solutions/3408825/](https://leetcode.com/problems/memoize-ii/solutions/3408825/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
> A Map's keys can be any value (including functions, objects, or any primitive). NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.

# Approach

Map is perfect for storing single argument. Each consecutive argument must have cache based on previous argument, which will form a tree like structure, like this:

```
fn(1,3,4) // { 1: { 3: { 4: {}}}};
fn(1,4,3) // { 1: { 3: { 4: {}}, 4: { 3: {}}}};
```

The only problem, is how do we store our result. It's been never stated, that memoized function will be called with the same amount of arguments every time. We need a way to store our result anywhere on the path and also make sure that it will never be misteaken with argument. Here is example.

```
fn(1,3) // { 1: { 3: 4}};
-> 4
fn(1)   // { 1: { 3: 4}};
-> { 3: 4 } // returning cache branch as result
```

There are different aproaches to overcome this. But since 
> Every Symbol() call is guaranteed to return a unique Symbol

we can use it to store actual result with guarantee, that it will never match any argument.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const RES = Symbol("result");

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const globalCache = new Map();

    return (...params) => {
        let currentCache = globalCache;
        for(const param of params) {
            if (!currentCache.has(param)) {
                currentCache.set(param, new Map());
            }
            currentCache = currentCache.get(param);
        }

        if (currentCache.has(RES)) return currentCache.get(RES);

        const result = fn(...params);

        currentCache.set(RES, result);
        return result;
    }
}