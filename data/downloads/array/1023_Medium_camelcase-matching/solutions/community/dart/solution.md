# simple solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/5663652/](https://leetcode.com/problems/camelcase-matching/solutions/5663652/)

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
  List<bool> camelMatch(List<String> queries, String pattern) {
    List<bool> res = [];

    for (String text in queries) {
      res.add(isMatch(text, pattern));
    }

    return res;
  }

  bool isMatch(String text, String pattern) {
    int pIndex = 0;

    for (int i = 0; i < text.length; i++) {
      int charCode = text[i].codeUnitAt(0);

      if (pIndex < pattern.length && text[i] == pattern[pIndex]) {
        pIndex++;
      } else if (charCode >= 65 && charCode <= 90) {
        return false;
      }
    }
    return pIndex == pattern.length;
  }
}

```