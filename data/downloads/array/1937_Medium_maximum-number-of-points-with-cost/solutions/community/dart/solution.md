# [O(M*N)] efficient approrch in dyanamic Programming in dart

**Author:** kuntalgain147
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648960/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648960/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the maximum points achievable by selecting one cell from each row in a matrix, with a penalty for choosing cells that are far apart in consecutive rows. The key observation is that for each row, the optimal choice depends not just on the points in the current row but also on the best points obtainable from the previous row, adjusted by the penalty. This suggests a dynamic programming approach, where we iteratively compute the best possible score for each cell in a row based on the previous row's scores.
# Approach
<!-- Describe your approach to solving the problem. -->
We use dynamic programming to maintain a running maximum of points for each cell in the matrix. For each row, we compute two auxiliary arrays: leftMax and rightMax, which help in determining the best score for moving leftwards or rightwards in the matrix, while accounting for penalties. These arrays allow us to efficiently calculate the maximum score for each cell in the current row based on the previous row\u2019s data.

Initialization: Start by copying the first row into a dp array, as there are no penalties for the first selection.
Transition: For each subsequent row, compute the leftMax and rightMax arrays to track the best possible score when moving left and right, respectively. Use these arrays to compute the new dp values for the current row.
Result: The maximum value in the last dp array gives the maximum points achievable.

# Complexity
- Time complexity:
$$O(M * N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O( N )$$

# Code
```
class Solution {
  int maxPoints(List<List<int>> points) {
    int m = points.length;
    int n = points[0].length;

    List<int> dp = List<int>.from(points[0]);

    for (int i = 1; i < m; i++) {
      List<int> leftMax = List<int>.filled(n, 0);
      List<int> rightMax = List<int>.filled(n, 0);
      List<int> newDp = List<int>.filled(n, 0);

      // Calculate left max
      leftMax[0] = dp[0];
      for (int j = 1; j < n; j++) {
        leftMax[j] = max(leftMax[j - 1] - 1, dp[j]);
      }

      // Calculate right max
      rightMax[n - 1] = dp[n - 1];
      for (int j = n - 2; j >= 0; j--) {
        rightMax[j] = max(rightMax[j + 1] - 1, dp[j]);
      }

      // Calculate new dp for the current row
      for (int j = 0; j < n; j++) {
        newDp[j] = points[i][j] + max(leftMax[j], rightMax[j]);
      }

      dp = newDp;
    }

    // The answer will be the maximum value in the last dp array
    return dp.reduce((a, b) => max(a, b));
  }
}

```