# [Javascript] DP w/ sum % k

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678786/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/2678786/)

---

**Solution: DP - Recursion w/ Memoization**

We don't need to keep track of the entire sum, only the remainder after dividing by `k` (`sum % k`).
Memoize each `dp(i, j, sumMod)`, where
*  `i = current row`
*  `j = current column `
*  `sumMod = the current sum % k`

When we reach the `grid[m - 1][n - 1]`, if the remainder of the sum is `0`, we have found a valid path.
Count the number of valid paths starting from `grid[0][0]`.

Time Complexity: `O(m * n * k)`
Space Complexity: `O(m * n * k)`
```
var numberOfPaths = function(grid, k) {
  let m = grid.length, n = grid[0].length, MOD = 10 ** 9 + 7;
  let memo = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(k).fill(-1)));
  return dfs(0, 0, grid[0][0] % k);

  function dfs(i, j, sumMod) {
    if (i === m - 1 && j === n - 1) return sumMod === 0 ? 1 : 0;
    if (memo[i][j][sumMod] !== -1) return memo[i][j][sumMod];

    let paths = [[i + 1, j], [i, j + 1]], ways = 0;
    for (let [x, y] of paths) {
      if (x < 0 || x >= m || y < 0 || y >= n) continue;
      ways = (ways + dfs(x, y, (sumMod + grid[x][y]) % k)) % MOD;
    }
    return memo[i][j][sumMod] = ways;
  }
};
```