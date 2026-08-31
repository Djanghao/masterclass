# Dart Solution

**Author:** MohamedFouad99
**Votes:** 1
**Link:** [https://leetcode.com/problems/power-of-two/solutions/3281718/](https://leetcode.com/problems/power-of-two/solutions/3281718/)

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
  bool isPowerOfTwo(int n) {
 if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n ~/ 2;
  }
  return true;
  }
}
```