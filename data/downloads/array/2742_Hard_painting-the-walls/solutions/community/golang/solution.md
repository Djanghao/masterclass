# [Go] 1D DP Knapsack

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4110567/](https://leetcode.com/problems/painting-the-walls/solutions/4110567/)

---

Classic knapsack problem.

When a certain paid painter is chosen, then free painters will paint `time[i]`walls while the one "paid wall" is being painted on.

```go
func paintWalls(cost []int, time []int) int {
	n := len(cost)
	dp := make([]int, n+1)
	for i := range dp {
		dp[i] = math.MaxInt32
	}
	dp[0] = 0
	for i := range cost {
		for j := n - 1; j >= 0; j-- {
			k := min(n, j+1+time[i])
			dp[k] = min(dp[k], dp[j]+cost[i])
		}
	}
	return dp[n]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```