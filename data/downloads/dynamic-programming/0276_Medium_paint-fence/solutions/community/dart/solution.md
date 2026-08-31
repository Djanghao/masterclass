# Dart

**Author:** victormanuelfrancodev
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/4756394/](https://leetcode.com/problems/paint-fence/solutions/4756394/)

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
  int numWays(int n, int k) {
     if (n == 0) return 0;
  if (n == 1) return k;
  int same = k;
  int diff = k * (k - 1);

  for (int i = 2; i < n; i++) {
    int temp = diff;
    diff = (same + diff) * (k - 1);
    same = temp;
  }

  return same + diff;
  }
}
```