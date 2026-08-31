# Simple access

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4386837/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4386837/)

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
  bool checkAlmostEquivalent(String word1, String word2) {
    const althaLen = 26;
    final arr1 = List.filled(althaLen, 0);
    final arr2 = List.filled(althaLen, 0);
    final code1 = word1.codeUnits;
    final code2 = word2.codeUnits;

    for (var i = 0; i < code1.length; i++) {
      arr1[code1[i] - 97]++;
      arr2[code2[i] - 97]++;
    }

    for (var i = 0; i < althaLen; i++) {
      if ((arr1[i] - arr2[i]).abs() > 3) {
        return false;
      }
    }

    return true;
  }
}
```