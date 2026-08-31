# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4014505/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4014505/)

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
  int minMoves(List<int> nums) {
      var c = 0;
      final mini = nums.reduce(min);
      for (var num in nums) {
          c += ((num - mini).abs());
      }

      return c;
  }
}
```