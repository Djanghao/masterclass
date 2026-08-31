# Simple and Easy to understand

**Author:** akshaynathks
**Votes:** 1
**Link:** [https://leetcode.com/problems/power-of-three/solutions/4965766/](https://leetcode.com/problems/power-of-three/solutions/4965766/)

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
  bool isPowerOfThree(int n) {
    if (n <= 0) {
      return false;
    }
    
    while (n % 3 == 0) {
      n ~/= 3;
    }
    
    return n == 1;
  }
}
```