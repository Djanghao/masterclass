# Easy Dart

**Author:** samiul110107
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5025949/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5025949/)

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
  String solveHour(String s) {
    List<String> chars = s.split('');
    if (chars[0] == "?" && chars[1] == "?") {
      chars[0] = "1";
      chars[1] = "1";
    } else if (chars[0] == "?") {
      if (chars[1] == "0" || chars[1] == "1") {
        chars[0] = "1";
      } else {
        chars[0] = "0";
      }
    } else if (chars[1] == "?") {
      if (chars[0] == "0") {
        chars[1] = "9";
      } else {
        chars[1] = "1";
      }
    }
    return chars.join('');
  }

  String solveMinute(String s) {
    List<String> chars = s.split('');
    if (chars[3] == "?" && chars[4] == "?") {
      chars[3] = "5";
      chars[4] = "9";
    } else if (chars[3] == "?") {
      chars[3] = "5";
    } else if (chars[4] == "?") {
      chars[4] = "9";
    }
    return chars.join('');
  }

  String findLatestTime(String s) {
    int count = s.split('?').length - 1;
    print(count);
    if (count == 4) {
      return "11:59";
    } else if (count == 0) {
      return s;
    }
    s = solveHour(s);
    s = solveMinute(s);
    return s;
  }
}
```