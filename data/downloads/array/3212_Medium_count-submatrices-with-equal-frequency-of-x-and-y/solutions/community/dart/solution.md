# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431704/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5431704/)

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
  int numberOfSubmatrices(List<List<String>> grid) {
      int m = grid.length;
      int n = grid[0].length;

      List<List<int>> prefix_X = List.generate(m + 1, (_) => List.filled(n + 1, 0));
      List<List<int>> prefix_Y = List.generate(m + 1, (_) => List.filled(n + 1, 0));

      for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
          prefix_X[i + 1][j + 1] = prefix_X[i + 1][j] + prefix_X[i][j + 1] - prefix_X[i][j] + (grid[i][j] == 'X' ? 1 : 0);
          prefix_Y[i + 1][j + 1] = prefix_Y[i + 1][j] + prefix_Y[i][j + 1] - prefix_Y[i][j] + (grid[i][j] == 'Y' ? 1 : 0);
        }
      }

      int count = 0;

      for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
          int x_count = prefix_X[i][j];
          int y_count = prefix_Y[i][j];

          if (x_count == y_count && x_count > 0) {
            count++;
          }
        }
      }

      return count;
  }
}
```