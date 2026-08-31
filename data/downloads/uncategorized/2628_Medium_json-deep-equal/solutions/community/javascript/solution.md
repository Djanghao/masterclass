# All Cases Detailed explanation!

**Author:** mdakram28
**Votes:** 41
**Link:** [https://leetcode.com/problems/json-deep-equal/solutions/3411176/](https://leetcode.com/problems/json-deep-equal/solutions/3411176/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    // All equal values and same objects are eliminated
    if (o1 === o2) return true;
    
    // If any of o1 or o2 is not an object, they are different values
    if (typeof o1 != 'object' || typeof o2 != 'object') return false;

    // Both of them should be objects or arrays
    if (Array.isArray(o1) !== Array.isArray(o2)) return false;
    
    // Both should have same keys, in case of indexes this will return indexes
    if (Object.keys(o1).length != Object.keys(o2).length) return false;

    // Check if all values against keys of o1 and o2 are deeply equal.
    // If number of keys are same, then at a different key in objects would mean at least
    // 1 value against the key of o2 will be undefined
    for (const key in o1) {
        if (!areDeeplyEqual(o1[key], o2[key])) return false;
    }

    // All checks passed
    return true;
};
```