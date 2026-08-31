# Dart Soluiton ✅

**Author:** ossimsek
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths/solutions/3542401/](https://leetcode.com/problems/unique-paths/solutions/3542401/)

---

# Intuition
To solve this problem, we can use dynamic programming. We can create a 2D grid to store the number of unique paths for each position. Let's call this grid dp.

The robot can only move down or right, so the number of unique paths to reach any position (i, j) would be the sum of the number of unique paths to reach the position above it (i-1, j) and the position to its left (i, j-1).

We can initialize the first row and first column of dp with 1 because there is only one way to reach any position in the first row or the first column (by moving either right or down).

Then, we can iterate through the remaining positions of dp, filling in the number of unique paths using the above formula.

Finally, the value at the bottom-right corner of dp will represent the total number of unique paths from the top-left corner to the bottom-right corner.


# Approach
1. Create a 2D grid dp of size m x n and initialize all the elements to 0.
2. Initialize the first row of dp with 1 because there is only one way to reach any position in the first row (by moving right).
3. Initialize the first column of dp with 1 because there is only one way to reach any position in the first column (by moving down).
4. Iterate through the remaining positions of dp (starting from the second row and second column):
-  Calculate the number of unique paths to reach the current position by summing up the number of unique paths to reach the position above it and the position to its left.
- Store the calculated value in the current position of dp.
5. Return the value at the bottom-right corner of dp, which represents the total number of unique paths.
# Complexity
- Time complexity:
 O(m * n), as we iterate through each position of the m x n grid once.
- Space complexity:
O(m * n), as we use a 2D grid of size m x n to store the number of unique paths for each position.
# Code
```
class Solution {
  int uniquePaths(int m, int n) {
    List<List<int>> dp = List.generate(m, (_) => List.filled(n, 0));

    for (int i = 0; i < m; i++) {
      dp[i][0] = 1;
    }

    for (int j = 0; j < n; j++) {
      dp[0][j] = 1;
    }

    for (int i = 1; i < m; i++) {
      for (int j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    return dp[m - 1][n - 1];
  }
}
```