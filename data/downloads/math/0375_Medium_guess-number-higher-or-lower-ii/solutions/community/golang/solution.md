# go, clean code, 0ms, beats 100%

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4312932/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4312932/)

---

```
func getMoneyAmount(n int) int {
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}
	//return topDown(dp, 1, n)
	return bottomUp(dp, 1, n)
}

func topDown(dp [][]int, begin, end int) int {
	if begin >= end {
		return 0
	}
	if dp[begin][end] != 0 {
		return dp[begin][end]
	}
	dp[begin][end] = math.MaxInt
	for i := begin; i <= end; i++ {
		dp[begin][end] = min(dp[begin][end], i+max(topDown(dp, begin, i-1), topDown(dp, i+1, end)))
	}
	return dp[begin][end]
}

func bottomUp(dp [][]int, begin, end int) int {
	for distance := 1; distance <= end-begin; distance++ {
		for i := begin; i+distance <= end; i++ {
			dp[i][i+distance] = i + dp[i+1][i+distance]
			for j := i + 1; j <= i+distance-1; j++ {
				dp[i][i+distance] = min(dp[i][i+distance], j+max(dp[i][j-1], dp[j+1][i+distance]))
			}
		}
	}
	return dp[begin][end]
}
```