# easy peasy solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/5867072/](https://leetcode.com/problems/student-attendance-record-i/solutions/5867072/)

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
  bool checkRecord(String s) {
    int a = 0;
    for (int i = 0; i < s.length; i++) {
      if (s[i] == "A") a++;
      if (i > 0 && i < s.length - 1 && s[i] == "L") {
        if (s[i - 1] == "L" && s[i + 1] == "L") return false;
      }
    }
    return a < 2;
  }
}

```