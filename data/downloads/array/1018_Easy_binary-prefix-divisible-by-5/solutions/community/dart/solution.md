# Simple Solution using dart

**Author:** Nissamudeen-VA
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/3766879/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/3766879/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
  List<bool> prefixesDivBy5(List<int> nums) {
      List<bool> results = [];
      int current = 0;
      for(int i = 0; i<nums.length; i++){
          current = (current * 2 + nums[i]) % 10;
          results.add(current==5 || current==0);
      }
      return results;
  }
}
```