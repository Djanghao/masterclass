# Beats 60.00%of users with JavaScript

**Author:** SSDeepakReddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/4166545/](https://leetcode.com/problems/stone-game-v/solutions/4166545/)

---


# Code
```
var stoneGameV = function(stoneValue) {
  let n = stoneValue.length;
  const pre = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pre[i] = pre[i - 1] + stoneValue[i - 1];
  }
  const dp = [...Array(n).fill(null)].map((_) => new Array(n).fill(0));
  for (let l = 1; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      let j = i + l,
        res = 0;
      for (let k = i; k < j; k++) {
        let left = pre[k + 1] - pre[i],
          right = pre[j + 1] - pre[k + 1];
        if (left < right) {
          res = Math.max(res, left + dp[i][k]);
        } else if (left > right) {
          res = Math.max(res, right + dp[k + 1][j]);
        } else {
          res = Math.max(res, left + dp[i][k]);
          res = Math.max(res, right + dp[k + 1][j]);
        }
      }
      dp[i][j] = res;
    }
  }
  return dp[0][n - 1];
};
```