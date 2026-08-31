# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3888619/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3888619/)

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
  int findValueOfPartition(List<int> nums) {
      nums.sort();
      var mini = 10000000000;
      for (int i = 1; i < nums.length; i++) {
          var diff = (nums[i] - nums[i - 1]).abs();
          if (diff < mini) {
              mini = diff;
          }
      }

      return mini;
  }
}
```