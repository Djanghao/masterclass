# Simple solution

**Author:** kamvis
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/5543132/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/5543132/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:)(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int? findClosestNumber(List<int> nums) {
    int minIndex = 0;

    for (int i = 1; i < nums.length; i++) {
      if ((nums[i].abs() < nums[minIndex].abs()) ||
          (nums[i].abs() == nums[minIndex].abs() && nums[i] > nums[minIndex])) {
        minIndex = i;
      }
    }
    return nums[minIndex];
  }
}

```