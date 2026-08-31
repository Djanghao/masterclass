# simple js solution with for and if check it out....

**Author:** midhunpallampetty
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5029692/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5029692/)

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
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    // let stat;
    for (let i = 1; i <= n; i++) {
   if (!s.includes(i.toString(2))) {
          return false
        }
    }
    return true
};
```