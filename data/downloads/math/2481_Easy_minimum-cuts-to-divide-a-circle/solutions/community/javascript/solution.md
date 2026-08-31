# Simple Solution

**Author:** adwxith
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4439290/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4439290/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if(n==1) return 0
    return n%2?n:n/2
};
```