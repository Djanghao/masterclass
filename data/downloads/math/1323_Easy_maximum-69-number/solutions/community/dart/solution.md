# One Line Solution in Dart

**Author:** Sreenath_s777
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/5474595/](https://leetcode.com/problems/maximum-69-number/solutions/5474595/)

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
  int maximum69Number (int nums) {
    return int.parse("$nums".replaceFirst("6","9"));
  }
}
```