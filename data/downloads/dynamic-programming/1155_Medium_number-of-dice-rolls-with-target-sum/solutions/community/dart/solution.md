# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/5107565/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/5107565/)

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
  int numRollsToTarget(int n, int k, int target) {
    final mod = 1000000007;
    final Map<String, int> cache = {};

    int solve(int dice, int faces, int total) {
      final key = '$dice,$total';
      if (cache.containsKey(key)) {
        return cache[key]!;
      }

      if (dice == 1) {
        if (total <= faces) {
          return 1;
        } else {
          return 0;
        }
      }

      var res = 0;
      for (int i = 1; i <= faces; i++) {
        if (total - i > 0) {
          res += solve(dice - 1, faces, total - i) % mod;
        }
      }

      cache[key] = res;
      return cache[key]!;
    }

    return solve(n, k, target) % mod;
  }
}


```