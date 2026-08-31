# 🫱‍🫲Runtime 1 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/4980485/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/4980485/)

---

# Code
```
func mergeStones(stones []int, K int) int {
    n := len(stones)
	if (n-1)%(K-1) > 0 {
		return -1
	}

	prefix := make([]int, n+1)
	for i := 0; i < n; i++ {
		prefix[i+1] = prefix[i] + stones[i]
	}

	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	for m := K; m <= n; m++ {
		for i := 0; i+m <= n; i++ {
			j := i + m - 1
			dp[i][j] = math.MaxInt32
			for mid := i; mid < j; mid += K - 1 {
				dp[i][j] = min(dp[i][j], dp[i][mid]+dp[mid+1][j])
			}
			if (j-i)%(K-1) == 0 {
				dp[i][j] += prefix[j+1] - prefix[i]
			}
		}
	}
	return dp[0][n-1]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```