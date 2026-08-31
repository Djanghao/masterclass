# Find Pivod Index in Dart

**Author:** sarvar_azodov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/3279712/](https://leetcode.com/problems/find-pivot-index/solutions/3279712/)

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
  int pivotIndex(List<int> nums) {
      int leftSum = 0;
      int rightSum = 0;
      rightSum = nums.reduce((a, b) => a + b);
      int ind = 0;
      while(ind < nums.length) {
          leftSum = leftSum + nums[ind];
          if(leftSum == rightSum) {
              return ind; 
          }
          rightSum = rightSum - nums[ind];
          ind++;
      }
      return -1;
  }
}
```