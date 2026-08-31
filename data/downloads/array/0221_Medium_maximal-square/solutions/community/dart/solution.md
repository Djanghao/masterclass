# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-square/solutions/4481582/](https://leetcode.com/problems/maximal-square/solutions/4481582/)

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
  int maximalSquare(List<List<String>> matrix) {
    final m = matrix.length;
    final n = matrix.first.length;
    final List<List<int>> dp = List.generate(m, (_) => List.filled(n, 0));
    var maxi = 0;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
           if (matrix[i][j] == '1') {
               if (i == 0 || j == 0) {
                   dp[i][j] = 1;
               } else {
                   dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
               }
           } 
        }
    }

    for (int i = 0; i < dp.length; i++) {
        for (int j = 0; j < dp[i].length; j++) {
            maxi = max(maxSize, dp[i][j]);
        }
    }
    return maxi * maxi;
  }
}
```
```
class Solution {
  int maximalSquare(List<List<String>> matrix) {
    final m = matrix.length;
    final n = matrix.first.length;
    final List<List<int>> dp = List.generate(m, (_) => List.filled(n, 0));

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
           if (matrix[i][j] == '1') {
               if (i == 0 || j == 0) {
                   dp[i][j] = 1;
               } else {
                   dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
               }
           } 
        }
    }

    final maxi = dp.map((nums) => nums.reduce(max)).reduce(max);

    return maxi * maxi;
  }
}
```