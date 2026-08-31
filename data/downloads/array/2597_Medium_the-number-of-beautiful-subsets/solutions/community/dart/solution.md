# Dart Solution

**Author:** ethulsr
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195402/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195402/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(2^n.n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int beautifulSubsets(List<int> nums, int k) {
    int n = nums.length;
    int count = 0;
    int totalSubsets = 1 << n;

    for (int subsetMask = 1; subsetMask < totalSubsets; subsetMask++) {
      List<int> subset = [];
      bool isBeautiful = true;

      for (int i = 0; i < n; i++) {
        if ((subsetMask & (1 << i)) != 0) {
          for (int num in subset) {
            if ((num - nums[i]).abs() == k) {
              isBeautiful = false;
              break;
            }
          }
          if (!isBeautiful) break;
          subset.add(nums[i]);
        }
      }

      if (isBeautiful) {
        count++;
      }
    }

    return count;
  }
}



```