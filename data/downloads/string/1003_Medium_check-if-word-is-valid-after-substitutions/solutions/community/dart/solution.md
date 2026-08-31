# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/3955382/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/3955382/)

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
    var flag = true;
    while (flag) {
      if (s.contains("abc")) {
        s = s.replaceAll("abc", "");
      } else {
        flag = false;
      }
    }

    return s.isEmpty;
  }
}
```