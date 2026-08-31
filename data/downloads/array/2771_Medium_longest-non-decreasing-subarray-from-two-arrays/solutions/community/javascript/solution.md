# Easy dp solution

**Author:** Liew-Li
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/5197709/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/5197709/)

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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function(nums1, nums2) {
  const N = nums1.length;
  let dp0 = 1;
  let dp1 = 1
  let res = 1;
  for (let i = 1; i < N; ++i) {
    let v0 = 1;
    let v1 = 1;
    if (nums1[i] >= nums1[i - 1]) {
      v0 = 1 + dp0;
    }
    if (nums1[i] >= nums2[i - 1]) {
      v0 = Math.max(v0, dp1 + 1);
    }

    if (nums2[i] >= nums1[i - 1]) {
      v1 = 1 + dp0;
    }
    if (nums2[i] >= nums2[i - 1]) {
      v1 = Math.max(v1, 1 + dp1);
    }
    [dp0, dp1] = [v0, v1];
    res = Math.max(res, dp0, dp1);
  }
  return res;
};
```