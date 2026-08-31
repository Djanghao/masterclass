# Valid Parentheses

**Author:** AbdulazimIslomjonov
**Votes:** 7
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/2948796/](https://leetcode.com/problems/valid-parentheses/solutions/2948796/)

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
 bool isValid(String s) {
  String d1 = "()";
  String d2 = "{}";
  String d3 = "[]";
  while (s.isNotEmpty) {
    if (s.contains(d1)) {
     s = s.replaceAll(d1, '');
    } else if (s.contains(d2)) {
     s = s.replaceAll(d2, '');
    } else if (s.contains(d3)) {
     s = s.replaceAll(d3, '');
    } else {
      return false;
    }
  }
  return true;
 }
}
```