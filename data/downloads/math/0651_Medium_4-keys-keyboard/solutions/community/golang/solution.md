# go dp solution

**Author:** xyx530538772
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/2644264/](https://leetcode.com/problems/4-keys-keyboard/solutions/2644264/)

---

```go

func maxInt(i, j int) int {
	if i > j {
		return i
	}
	return j
}

func maxA(n int) int {
	dp := make([]int, n+1)
	// base case
	dp[0] = 0
	for i := 1; i <= n; i++ {
		dp[i] = dp[i-1] + 1
		for j := 2; j < i; j++ {
			dp[i] = maxInt(
				dp[i],
				dp[j-2]*(i-j+1), // copy and paste case
			)
		}
	}
	return dp[n]
}
```