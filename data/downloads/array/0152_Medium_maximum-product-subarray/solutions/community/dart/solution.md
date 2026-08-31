# Be simple

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/4697878/](https://leetcode.com/problems/maximum-product-subarray/solutions/4697878/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
need to think remove for loop 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int maxProduct(List<int> nums) {
    if (nums.isEmpty) {
      return 0;
    }
    int cur = 1;
    int maxVal = nums.first;

    for (var i = 0; i < nums.length; i++) {
      for (var j = i; j < nums.length; j++) {
        if (cur == 0) {
          cur = 1;
        }
        cur *= nums[j];
        maxVal = max(maxVal, cur);
      }
      cur = 1;
    }
    return maxVal;
  }
}
```