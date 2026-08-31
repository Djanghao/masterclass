# Simple Dart Solution

**Author:** vinayaaugusthy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4714698/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4714698/)

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
  int minimumSum(List<int> nums) {
    int minSum = -1;

    for (int i = 0; i < nums.length - 2; i++) {
      for (int j = i + 1; j < nums.length - 1; j++) {
        for (int k = j + 1; k < nums.length; k++) {
          if (nums[i] < nums[j] && nums[k] < nums[j]) {
            int currentSum = nums[i] + nums[j] + nums[k];
            if (minSum == -1 || currentSum < minSum) {
              minSum = currentSum;
            }
          }
        }
      }
    }

    return minSum;
  }
}

```