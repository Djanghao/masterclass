# simplest

**Author:** bibinpeter2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/5312179/](https://leetcode.com/problems/reverse-only-letters/solutions/5312179/)

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
  String reverseOnlyLetters(String s) {
    List<String> letters = s.split('').where((char) => char.replaceAll(RegExp(r'[a-zA-Z]'), '') == '').toList();
  return s.splitMapJoin(RegExp(r'[a-zA-Z]'), onMatch: (_) => letters.removeLast(), onNonMatch: (nonLetter) => nonLetter);
  }
}
```