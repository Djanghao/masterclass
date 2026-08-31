# Dart Solution 💯

**Author:** michaelopoku790
**Votes:** 1
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/3447126/](https://leetcode.com/problems/move-zeroes/solutions/3447126/)

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
  void moveZeroes(List<int> nums) {
      List<int> testValues = [];
      nums.forEach((value)=> testValues.add(value));
      testValues.retainWhere((value)=> value == 0);
      nums.removeWhere((value)=> value == 0);
      nums.addAll(testValues);
  }
}
```