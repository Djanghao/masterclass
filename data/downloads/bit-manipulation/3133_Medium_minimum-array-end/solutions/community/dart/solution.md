# Dart simple solution

**Author:** _abhiramks
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6025168/](https://leetcode.com/problems/minimum-array-end/solutions/6025168/)

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
  int minEnd(int n, int x) {
    int a = x;
    while (--n > 0) {
      a = (a + 1) | x;
    }
    return a;
  }
}

```