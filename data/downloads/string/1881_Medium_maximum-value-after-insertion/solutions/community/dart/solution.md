# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/4209276/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/4209276/)

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
  String maxValue(String n, int x) {
      final containsNegative = n.contains('-');
      if (containsNegative) {
          return findMinimum(n, x);
      } else {
          return findMaximum(n, x);
      }
  }

  String findMaximum(String cand, int x) {
      final candL = cand.split('');
      final idx = candL.indexWhere((e) => int.parse(e) < x);
      if (idx == -1) {
          return cand + x.toString();
      }
      candL.insert(idx, x.toString());
      return candL.join('');
  }

  String findMinimum(String cand, int x) {
      final candL = cand.split('');
      candL.remove('-');
      final idx = candL.indexWhere((e) => int.parse(e) > x);
      if (idx == -1) {
          return cand + x.toString();
      }
      candL.insert(idx, x.toString());
      return '-' + candL.join('');
  }
}
```