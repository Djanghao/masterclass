# Simple Proxy solution

**Author:** amazoor
**Votes:** 1
**Link:** [https://leetcode.com/problems/infinite-method-object/solutions/3680030/](https://leetcode.com/problems/infinite-method-object/solutions/3680030/)

---

# Intuition
Simple solution

# Approach
Minimal solution based on Proxy

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @return {Object}
 */
var createInfiniteObject = function() {
    return new Proxy({}, {
        get: (_, prop)=> () => prop
    });
};

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
```