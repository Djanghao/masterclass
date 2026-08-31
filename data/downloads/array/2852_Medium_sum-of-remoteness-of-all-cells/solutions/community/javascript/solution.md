# Javascript - DFS

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4049506/](https://leetcode.com/problems/sum-of-remoteness-of-all-cells/solutions/4049506/)

---

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var sumRemoteness = function (grid) {
  let ans = 0;
  let totalSum = 0;
  const n = grid.length;
  const m = grid[0].length;
  const dirs = [-1, 0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === -1) continue;
      totalSum += grid[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === -1) continue;
      const [currCount, currSum] = dfs(grid, i, j, n, m, dirs);
      ans += totalSum * currCount - currSum * currCount;
    }
  }

  return ans;
};

function dfs(grid, i, j, n, m, dirs) {
  let currCount = 1;
  let currSum = grid[i][j];
  grid[i][j] = -1;

  for (let idx = 0; idx < dirs.length - 1; idx++) {
    const ni = i + dirs[idx];
    const nj = j + dirs[idx + 1];

    if (ni >= 0 && ni < n && nj >= 0 && nj < m && grid[ni][nj] !== -1) {
      const [nextCount, nextSum] = dfs(grid, ni, nj, n, m, dirs);
      currCount += nextCount;
      currSum += nextSum;
    }
  }

  return [currCount, currSum];
}

```