# [JavaScript] 1031. Maximum Sum of Two Non-Overlapping Subarrays

**Author:** pgmreddy
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4265208/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4265208/)

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
var maxSumTwoNoOverlap = function (nums, len1, len2) {
  let n = nums.length;
  let prefixSum = new Array(n);
  for (let i = 0, sum1 = 0; i < n; i++) {
    prefixSum[i] = sum1 += nums[i];
  }

  let max = 0;
  let count = 2;
  while (count--) {
    for (let i = 0; i + len1 <= n; i++) {
      let sum1 = prefixSum[i + len1 - 1] - (prefixSum[i - 1] || 0);
      for (let j = i + len1; j + len2 <= n; j++) {
        let sum2 = prefixSum[j + len2 - 1] - (prefixSum[j - 1] || 0);
        max = Math.max(max, sum1 + sum2);
      }
    }
    [len2, len1] = [len1, len2];
  }
  return max;
};
```

---
