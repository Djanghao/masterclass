# Be simple

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558446/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4558446/)

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
  int minSteps(String s, String t) {
    final arr = List.filled(26, 0);
    if (s.length != t.length) {
      return 0;
    }

    final sCodes = s.codeUnits;
    final tCodes = t.codeUnits;

    for (var i = 0; i < sCodes.length; i++) {
      arr[sCodes[i] - 97]++;
      arr[tCodes[i] - 97]--;
    }
    final lessThanZero = arr.where((element) => element < 0).toList();
    return lessThanZero.isEmpty
        ? 0
        : lessThanZero.reduce((value, element) => value + element).abs();
  }
}
```