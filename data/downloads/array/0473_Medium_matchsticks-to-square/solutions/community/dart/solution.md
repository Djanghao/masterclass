# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/4103307/](https://leetcode.com/problems/matchsticks-to-square/solutions/4103307/)

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
  bool makesquare(List<int> matchsticks) {
      final total = matchsticks.fold<int>(0, (a, b) => a + b);
      if (total % 4 != 0) {
          return false;
      }
      final List<int> p = List.filled(4, 0);
      final targetLength = total ~/ 4;
      matchsticks.sort((a, b) => b.compareTo(a));
      return backtrack(matchsticks, p, 0, targetLength);
  }

  bool backtrack(List<int> cand, List<int> sides, int idx, int targetLength) {
      if (idx == cand.length && sides.every((s) => s == targetLength)) {
          return true;
      }
      for (int i = 0; i < 4; i++) {
          if (sides[i] + cand[idx] <= targetLength) {
              sides[i] += cand[idx];
              if (backtrack(cand, sides, idx + 1, targetLength)) {
                  return true;
              }
              sides[i] -= cand[idx];
          }
      }
      return false;
  }
}
```