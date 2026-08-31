# Easyest way to Largest Submatrix With Rearrangements.

**Author:** saslo0165
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4335605/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4335605/)

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
  int customMax(int a, int b) => a > b ? a : b;

  int largestSubmatrix(List<List<int>> matrix) {
    int m = matrix.length;
    int n = matrix[0].length;

    for (int i = 1; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (matrix[i][j] == 1) {
          matrix[i][j] += matrix[i - 1][j];
        }
      }
    }

    for (List<int> row in matrix) {
      row.sort((a, b) => b - a);
    }

    int maxArea = 0;
    for (List<int> row in matrix) {
      for (int j = 0; j < n; j++) {
        maxArea = customMax(maxArea, row[j] * (j + 1));
      }
    }

    return maxArea;
  }
}

```