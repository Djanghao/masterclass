# Simple solution in Dart

**Author:** exoad
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/6028494/](https://leetcode.com/problems/repeated-substring-pattern/solutions/6028494/)

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
```dart []
class Solution {
  bool repeatedSubstringPattern(String s) {
    return (s+s).substring(1,s.length*2-1).contains(s);
  }
}
```