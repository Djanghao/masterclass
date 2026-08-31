# Dart 50% runtime and 100% memory

**Author:** iskvnder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/4593322/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/4593322/)

---


# Code
```
class Solution {
  int minFallingPathSum(List<List<int>> matrix) {
    int n = matrix.length;

    for (int row = 1; row < n; row++) {
      for (int col = 0; col < n; col++) {
        int leftDiagonal = (col > 0) ? matrix[row - 1][col - 1] : double.maxFinite.toInt();
        int rightDiagonal = (col < n - 1) ? matrix[row - 1][col + 1] : double.maxFinite.toInt();
        int top = matrix[row - 1][col];

        matrix[row][col] += min(leftDiagonal, min(rightDiagonal, top));
      }
    }

    return matrix[n - 1].reduce(min);
  }
}

int min(int a, int b) => a < b ? a : b;

```