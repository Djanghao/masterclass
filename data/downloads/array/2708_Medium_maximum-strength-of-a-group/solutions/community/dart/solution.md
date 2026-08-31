# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/4297024/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/4297024/)

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
  int maxStrength(List<int> nums) {
      if (nums.length == 1) {
          return nums.first;
      }
      nums.sort();
      final posNums = nums.where((e) => e > 0).toList();
      final negNums = nums.where((e) => e < 0).toList();
      final posProd = posNums.fold<int>(1, (a, b) => a * b);
      if (negNums.length % 2 != 0) {
          negNums.removeLast();
      }
      final negProd = negNums.fold<int>(1, (a, b) => a * b);
      if (posNums.isEmpty && negNums.isEmpty) {
          return 0;
      }
      return posProd * negProd;
  }
}
```