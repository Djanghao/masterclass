# Be simple

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/4727047/](https://leetcode.com/problems/wiggle-subsequence/solutions/4727047/)

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
class Solution {
  int wiggleMaxLength(List<int> nums) {
      if (nums.length < 2) {
      return nums.length;
    }

    int step = 1;
    int diff = 0;

    for (var i = 1; i < nums.length; i++) {
      int curDiff = nums[i] - nums[i - 1];

      if ((curDiff > 0 && diff <= 0) || curDiff < 0 && diff >= 0) {
        step++;
        diff = curDiff;
      }
    }
    return step;
  }
}
```