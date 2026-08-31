# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3821452/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3821452/)

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
  int longestContinuousSubstring(String s) {
    var ans = 1;
    var currLength = 1;

    for (int i = 1; i < s.length; i++) {
        if (s.codeUnitAt(i) == s.codeUnitAt(i - 1) + 1) {
          currLength += 1;
          ans = max(ans, currLength);
        } else {
          currLength = 1;
        }
    }

    return ans;
  }
}
```