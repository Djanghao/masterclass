# Golang DP

**Author:** harshawasthi90
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934023/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934023/)

---

```
func maximizeTheProfit(n int, offers [][]int) int {
	sort.Slice(offers, func(i, j int) bool {
		return offers[i][0] < offers[j][0]
	})

	dp := make([]int, n+1)
	j := 0
	for i := 1; i <= n; i++ {
		dp[i] = maxI(dp[i], dp[i-1])

		for ; j < len(offers) && offers[j][0] == i-1; j++ {
			s := offers[j][0]
			e := offers[j][1]
			g := offers[j][2]

			dp[e+1] = maxI(dp[e+1], dp[s]+g)
		}
	}

	return dp[n]
}
```