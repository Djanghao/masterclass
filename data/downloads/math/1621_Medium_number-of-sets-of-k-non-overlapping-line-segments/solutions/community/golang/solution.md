# 🔥🔥🔥🔥Go Solution（Runtime 25 ms Beats 50.00% of users with Go）🔥🔥🔥🔥

**Author:** pvt2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/4725053/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/4725053/)

---

# Code
```
func numberOfSets(n, k int) int {
    mod := int64(1_000_000_007)
	if k == 1 {
		return n * (n - 1) / 2
	}
	dp := make([][]int64, n)
	for i := range dp {
		dp[i] = make([]int64, k)
	}
	for i := 1; i < n; i++ {
		dp[i][0] = dp[i-1][0] + int64((i*(i+1))/2)
	}
	for i := 2; i < n; i++ {
		for j := 1; j < i && j < k; j++ {
			dp[i][j] = (dp[i-1][j] - dp[i-2][j] + dp[i-1][j-1] + mod) % mod
			dp[i][j] += dp[i-1][j]
			dp[i][j] %= mod
		}
	}
	return int((dp[n-1][k-1] - dp[n-2][k-1] + mod) % mod)
}
```