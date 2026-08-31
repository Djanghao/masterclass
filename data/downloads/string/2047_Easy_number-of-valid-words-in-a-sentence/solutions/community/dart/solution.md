# Simple by rules

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/3244008/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/3244008/)

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
  int countValidWords(String sentence) {
    final sl = sentence.split(' ');
    var validCount = 0;
    for (var i = 0; i < sl.length; i++) {
      if (sl[i].isNotEmpty && isValid(sl[i])) {
        validCount++;
      }
    }
    return validCount;
  }

bool isValid(String s) {
    final l = s.codeUnits;
    var result = <bool>[];
    var dashCount = 0;
    for (var i = 0; i < l.length; i++) {
      if (l[i] > 96 && l[i] < 123) {
      } else if (l[i] == 33 || l[i] == 44 || l[i] == 46) {
        if (i != s.length - 1) {
          return false;
        }
      } else if (l[i] > 47 && l[i] < 58) {
        return false;
      } else if (l[i] == 45) {
        if (dashCount >= 1) {
          return false;
        }
        if (i == 0) {
          return false;
        }
        if (i > 0) {
          if (!(l[i - 1] > 96 && l[i - 1] < 123)) {
            return false;
          }
        }

        if (i == s.length - 1) {
          return false;
        }

        if (i < s.length - 1) {
          if (!(l[i + 1] > 96 && l[i + 1] < 123)) {
            return false;
          }
        }
        dashCount++;
      }
    }
    return result.where((element) => element == false).isEmpty;
  }
}
```