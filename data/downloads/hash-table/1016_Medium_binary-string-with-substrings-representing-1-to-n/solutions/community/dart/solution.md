# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5493388/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/5493388/)

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
  bool queryString(String s, int n) {
    for (int i = 1; i <= n; i++) {
        final bin = i.toRadixString(2);
        if (!s.contains(bin)) {
            return false;
        }
    }

    return true;
  }
}
```