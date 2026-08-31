# Dart solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4310272/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4310272/)

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
  bool checkStrings(String s1, String s2) {
    if (s1 == s2) {
        return true;
    }

    final List<int> odd = List<int>.filled(26, 0);
    final List<int> even = List<int>.filled(26, 0);

    for (int i = 0; i < s1.length; i++) {
      if (i % 2 == 0) {
        even[s1.codeUnitAt(i) - 97]++;
        even[s2.codeUnitAt(i) - 97]--;
      } else {
        odd[s1.codeUnitAt(i) - 97]++;
        odd[s2.codeUnitAt(i) - 97]--;
      }
    }

    final oddZeroes = odd.every((e) => e == 0);
    final evenZeroes = even.every((e) => e == 0);
    return oddZeroes && evenZeroes;
  }
}
```