# JS

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052635/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052635/)

---

# Code
```
var minimumOperations = function (grid) {
  let m = grid.length
  let n = grid[0].length

  let cnts = new Array(n).fill().map((_, j) => {
    let counter = {}
    for (let i = 0; i < m; i++) {
      counter[grid[i][j]] = (counter[grid[i][j]] || 0) + 1
    }
    return counter
  })

  let dp = new Array(n).fill().map(() => Array(10).fill(Infinity))

  for (let j = 0; j < 10; j++) {
    dp[0][j] = m - (cnts[0][j] || 0)
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (j !== k) {
          const count = m - (cnts[i][j] || 0)
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + count)
        }
      }
    }
  }
  return Math.min(...dp[n - 1])
}
```