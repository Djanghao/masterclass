# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4938613/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4938613/)

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
  bool hasTrailingZeros(List<int> nums) {
    final evenCount = nums.where((e) => e % 2 == 0).length;
    return evenCount >= 2;
  }
}

```