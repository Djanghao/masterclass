# [JavaScript] 2903. Find Indices With Index and Value Difference I

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169852/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169852/)

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

---

```
var findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference && //
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j];
      }
    }
  return [-1, -1];
};
```

---

**Weekly Contest 367**
- Q1 - See above
- Q2 - https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169863/javascript-2904-shortest-and-lexicographically-smallest-beautiful-string/
- Q3 - https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4169858/javascript-2905-find-indices-with-index-and-value-difference-ii/

---
