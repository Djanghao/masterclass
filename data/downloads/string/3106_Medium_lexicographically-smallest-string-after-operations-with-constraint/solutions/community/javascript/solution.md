# JS - Simple O(n) Solution

**Author:** e4truong
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985947/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985947/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (s, k) {
    const str = s.split("");

    for (let i = 0; i < str.length && k >= 0; i++) {
        const distanceFromA = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const cyclicDistanceFromA = Math.min(distanceFromA, 26 - distanceFromA);
        
        // Try to set the current character to 'a' if possible
        if (cyclicDistanceFromA <= k) {
            str[i] = 'a';
            k -= cyclicDistanceFromA;
        // Otherwise, move it as close to 'a' as possible
        } else {
            str[i] = String.fromCharCode(str[i].charCodeAt(0) - k);
            k = 0;
        }
    }

    return str.join("");
};
```