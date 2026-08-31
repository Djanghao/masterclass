# [Dart] Iterative Dynamic Programming

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-all-possible-routes/solutions/3679859/](https://leetcode.com/problems/count-all-possible-routes/solutions/3679859/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2 \\cdot  \	ext{fuel})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n \\cdot\	ext{fuel})$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countRoutes(List<int> locations, int start, int finish, int fuel) {
    int n = locations.length;
    final dp = List<List<int>>.generate(
        n, (i) => List<int>.filled(fuel + 1, i == finish ? 1 : 0));
    for (int j = 0; j <= fuel; j++) {
      for (int i = 0; i < n; i++) {
        for (int k = 0; k < n; k++) {
          if (k == i) continue;
          int index = (locations[i] - locations[k]).abs();
          if (index <= j) {
            dp[i][j] = (dp[i][j] + dp[k][j - index]) % 1000000007;
          }
        }
      }
    }

    return dp[start][fuel];
  }
}
```