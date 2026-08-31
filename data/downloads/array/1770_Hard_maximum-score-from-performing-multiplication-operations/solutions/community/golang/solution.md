# Go | DP | Faster 100%

**Author:** sobik
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2583138/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2583138/)

---

```
func maximumScoreDP2(nums []int, multipliers []int) int {
	max := func(a, b int) int {
		if a > b {
			return a
		}
		return b
	}
	n, m := len(nums), len(multipliers)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, m+1)
	}
	for op:=m-1; op >=0; op-- {
		for left := op; left>=0; left-- {
			l := nums[left]*multipliers[op] + dp[op+1][left+1]
			rigthIdx := n - 1 + left - op
			r := nums[rigthIdx]*multipliers[op] + dp[op+1][left]
			dp[op][left] = max(l,r)
		}
	}
	return dp[0][0]
}

```