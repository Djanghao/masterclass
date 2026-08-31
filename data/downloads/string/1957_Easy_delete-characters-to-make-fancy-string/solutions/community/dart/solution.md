# Dart solution

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991533/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991533/)

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
  String makeFancyString(String s) {
    StringBuffer result = StringBuffer();
    String lastChar = '';
    int count = 0;

    for (int i = 0; i < s.length; i++) {
      if (s[i] == lastChar) {
        count++;
      } else {
        count = 1;
        lastChar = s[i];
      }

      if (count > 2) {
        continue;
      }
      
      result.write(s[i]);
    }

    return result.toString();
  }
}

```