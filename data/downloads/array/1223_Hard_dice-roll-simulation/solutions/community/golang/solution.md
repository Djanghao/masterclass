# 👍Runtime 3 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/5229835/](https://leetcode.com/problems/dice-roll-simulation/solutions/5229835/)

---

# Code
```
func dieSimulator(n int, rollMax []int) int {
	divisor := int64(math.Pow(10, 9)) + 7
	dp := make([][]int64, n)
	for i := range dp {
		dp[i] = make([]int64, 7)
	}
	for i := 0; i < 6; i++ {
		dp[0][i] = 1
	}
	dp[0][6] = 6

	for i := 1; i < n; i++ {
		sum := int64(0)
		for j := 0; j < 6; j++ {
			dp[i][j] = dp[i-1][6]
			if i-rollMax[j] < 0 {
				sum = (sum + dp[i][j]) % divisor
			} else {
				if i-rollMax[j]-1 >= 0 {
					dp[i][j] = (dp[i][j] - (dp[i-rollMax[j]-1][6] - dp[i-rollMax[j]-1][j])) % divisor
				} else {
					dp[i][j] = (dp[i][j] - 1) % divisor
				}
				dp[i][j] = (dp[i][j] + divisor) % divisor
				sum = (sum + dp[i][j]) % divisor
			}
		}
		dp[i][6] = sum
	}

	return int(dp[n-1][6])
}

```