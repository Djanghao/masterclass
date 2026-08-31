# DP Solution in Javascript (Recursion + Dp Memo + Dp tabulation)

**Author:** vivekdogra
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2375659/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2375659/)

---

**1. Recursion**

````
function solveRec(value, i, j) {
  // base case
  if (i + 1 === j) return 0;
  let ans = Number.MAX_VALUE;
  for (let k = i + 1; k < j; k++) {
    ans = Math.min(
      ans,
      value[i] * value[j] * value[k] +
        solveRec(value, i, k) +
        solveRec(value, k, j)
    );
  }
  return ans;
}
var minScoreTriangulation = function (values) {
  let n = values.length;
  return solveRec(values, 0, n - 1);
};
````

**2. Recursion + memoization (Top down approach)**

````
function solveMem(value, i, j, dp) {
  // base case
  if (i + 1 === j) return 0;
  if (dp[i][j] !== -1) return dp[i][j];
  let ans = Number.MAX_VALUE;
  for (let k = i + 1; k < j; k++) {
    ans = Math.min(
      ans,
      value[i] * value[j] * value[k] +
        solveMem(value, i, k, dp) +
        solveMem(value, k, j, dp)
    );
  }
  dp[i][j] = ans;
  return dp[i][j];
}
var minScoreTriangulation = function (values) {
  let n = values.length;
  let dp = new Array(n).fill(-1).map(() => Array(n).fill(-1));
  return solveMem(values, 0, n - 1, dp);
};
````

**3. Bottom up approach (Tabulation)**

```
function solveTab(value) {
  // base case
  let n = value.length;
  let dp = new Array(n).fill(0).map(() => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      let ans = Number.MAX_VALUE;
      for (let k = i + 1; k < j; k++) {
        ans = Math.min(
          ans,
          value[i] * value[j] * value[k] + dp[i][k] + dp[k][j]
        );
      }
      dp[i][j] = ans;
    }
  }

  return dp[0][n - 1];
}
var minScoreTriangulation = function (values) {
  let n = values.length;
  return solveTab(values);
};

```