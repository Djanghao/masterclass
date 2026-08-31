# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 16
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/408898/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/408898/)

---

```
function maximumMinimumPath(A) {
  if (A == null || A.length === 0 || A[0].length === 0) return 0;

  const h = A.length;
  const w = A[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const q = [[0, 0]];
  const dp = [...Array(h)].map(() => Array(w).fill(0));
  dp[0][0] = A[0][0];

  while (q.length) {
    const [x, y] = q.shift();
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i < 0 || j < 0 || i >= h || j >= w) continue;
      const score = Math.min(A[i][j], dp[x][y]);
      if (score > dp[i][j]) {
        // only continue if it is on the the path that has bigger score
        dp[i][j] = score;
        q.push([i, j]);
      }
    }
  }

  return dp[h - 1][w - 1];
}
```

More at https://github.com/Hongbo-Miao/leetcode