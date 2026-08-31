# Javascript very easy solution

**Author:** Marsgoat
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3870011/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3870011/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. If the length of nums is 1 or 2, then return true.
2. If there exist two consecutive numbers whose sum is greater than or equal to m, then return true.
(As long as the sum of two consecutive numbers is greater than or equal to m, it can be split because you can always split off the other numbers one by one.)
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function(nums, m) {
  if (nums.length <= 2) return true;
  // \u53EA\u8981\u6709\u5169\u500B\u9023\u7E8C\u7684\u6578\u5B57\u548C\u5927\u65BC\u7B49\u65BC m\uFF0C\u5C31\u53EF\u4EE5\u5206\u5272
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] >= m) {
      return true;
    }
  }

  return false;    
};
```