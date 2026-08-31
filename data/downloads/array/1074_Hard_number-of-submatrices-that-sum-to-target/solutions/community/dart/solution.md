# Dart Solution

**Author:** ayato91
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4637057/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4637057/)

---

# Approach
Using List Manipulation and Map (key-value pairs) Manipulation Technique.
# Code
```
class Solution {
  int numSubmatrixSumTarget(List<List<int>> matrix, int target) {
        int m = matrix.length;
    int n = matrix[0].length;

    for (int row = 0; row < m; row++) {
      for (int col = 1; col < n; col++) {
        matrix[row][col] += matrix[row][col - 1];
      }
    }

    int count = 0;

    for (int c1 = 0; c1 < n; c1++) {
      for (int c2 = c1; c2 < n; c2++) {
        Map<int, int> map = {};
        map[0] = 1;
        int sum = 0;

        for (int row = 0; row < m; row++) {
          sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);
          count += map[sum - target] ?? 0;
          map[sum] = (map[sum] ?? 0) + 1;
        }
      }
    }

    return count;
    }
}




```