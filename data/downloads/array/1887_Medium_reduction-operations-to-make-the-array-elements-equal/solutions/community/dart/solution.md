# Solution with sort

**Author:** Nomoke
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4307466/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4307466/)

---

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(1)

# Code
```
class Solution {
  int reductionOperations(List<int> nums) {  
      nums.sort();
      int operations = 0;

      int curLen = 1;
      int curNum = nums.last;

      for (int i = nums.length - 2; i >= 0; --i) {
          if (nums[i] != curNum) {
              operations += curLen;
              curNum = nums[i];
          }
          curLen += 1;
      }

      return operations;
  }
}

// 2, 3, 4, 5, 6
```