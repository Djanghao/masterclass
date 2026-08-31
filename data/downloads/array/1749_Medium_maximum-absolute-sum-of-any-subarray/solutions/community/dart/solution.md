# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5194932/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5194932/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Take the maximum value between the maximum subarray and the minimum subarray. 

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
  int maxAbsoluteSum(List<int> nums) {
    int maximum = -10000000;
    int curMax = 0;
    for (int num in nums) {
      curMax += num;
      maximum = max(maximum, curMax);
      if (curMax < 0) {
        curMax = 0;
      }
    }

    int minimum = 10000000;
    int curMin = 0;
    for (int num in nums) {
      curMin += num;
      minimum = min(minimum, curMin);
      if (curMin > 0) {
        curMin = 0;
      }
    }

    return max(maximum.abs(), minimum.abs());
  }
}


```