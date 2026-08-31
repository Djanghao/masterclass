# Easy Solution

**Author:** safwanpulisseri
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string/solutions/5243596/](https://leetcode.com/problems/reverse-string/solutions/5243596/)

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
  void reverseString(List<String> s) {
    s.setRange(0, s.length, s.reversed);
  }
}

```