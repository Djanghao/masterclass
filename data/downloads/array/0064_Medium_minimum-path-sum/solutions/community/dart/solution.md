# Dart - DP

**Author:** torocholazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3347690/](https://leetcode.com/problems/minimum-path-sum/solutions/3347690/)

---

# Intuition
DP. Memoized the prev minPathSum

# Approach
1. Calculate m (row) and n (col)
2. Create a memoized row for the latest row of the grid we walking to. The value is the minimal path between prev row or prev col(if col>0) with additional of the current grid[m][n] value.
3. return the last column in the memoized value

# Complexity
- Time complexity:
O(row x col)

- Space complexity:
O(col)

# Code
```
class Solution {
  int minPathSum(List<List<int>> grid) {
      int m = grid.length;
      int n = grid[0].length;

      List<int> pathSum = List.filled(n, 100000);
      pathSum[0] = 0;

      for (int y=0; y<m; y++) {
        for (int x=0; x<n; x++) {
          pathSum[x] = (x > 0 ? min(pathSum[x], pathSum[x-1]) : pathSum[x]) + grid[y][x];
        }
      }
      return pathSum[n-1];
  }
}

int min(int a, int b) {
  if (a<b){
    return a;
  }
  return b;
}
```