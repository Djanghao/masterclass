# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/4079069/](https://leetcode.com/problems/bulb-switcher-ii/solutions/4079069/)

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
  int flipLights(int n, int presses) {
    if (presses == 0) {
      return 1;
    } else if (presses == 1) {
      if (n < 3) {
        return n + 1;
      } else {
        return 4;
      }
    } else if (presses == 2) {
      if (n == 1) {
        return 2;
      } else if (n == 2) {
        return 4;
      } else {
        return 7;
      }
    } else if (presses >= 3) {
      if (n == 1) {
        return 2;
      } else if (n == 2) {
        return 4;
      } else {
        return 8;
      }
    }

    return -1;
  }
}
```