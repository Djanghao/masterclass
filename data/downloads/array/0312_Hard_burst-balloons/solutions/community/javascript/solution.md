# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 10
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/425051/](https://leetcode.com/problems/burst-balloons/solutions/425051/)

---

**Idea**

dp[i][j] = maxCoins(nums[i:j])
dp[i][j] = max { dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j], i <= k <= j }

res = dp[1][n]

```
const maxCoins = (nums) => {
  const vals = [1, ...nums, 1];
  const n = nums.length;
  const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len <= n + 1; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j],
        );
      }
    }
  }
  return dp[1][n];
};
```
