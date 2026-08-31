# Be simple easy access

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4832585/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4832585/)

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
  int minimumLength(String s) {
     int start = 0;
    int end = s.length - 1;

    while (start < end) {
      if (s[start] == s[end]) {
        final key = s[start];

        while (s[start] == key) {
          if (start >= end) {
            return 0;
          }
          start++;
        }

        while (s[end] == key) {
          if (start >= end) {
            return 0;
          }
          end--;
        }
      } else {
        return s.substring(start, end + 1).length;
      }
    }

    if (start == end) {
      return s.substring(start, end + 1).length;
    }
    return s.length;
  }
}
```