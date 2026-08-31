# 😸😸😸 easy js

**Author:** jijekcom
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4333170/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4333170/)

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
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const n = mat.length;
    const l = mat[0].length;
    k = k % l;

    for (let i=0; i<n; i++) {
       const el1 = [...mat[i].slice(k), ...mat[i].slice(0, k)].join('');
       const el2 = mat[i].join('');

       if (el1 !== el2) return false
    }

    return true
};
```