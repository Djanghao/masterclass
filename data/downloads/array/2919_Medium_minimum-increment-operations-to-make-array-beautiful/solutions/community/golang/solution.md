# DP Approach Solutions

**Author:** chong4165
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4221402/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4221402/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
DP Approach

# Code
```
func min(a, b int64) int64 {
	if a < b {
		return a
	}
	return b
}

func min3(a, b, c int64) int64 {
	return min(min(a, b), c)
}

func max(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}

func minIncrementOperations(nums []int, k int) int64 {
    n := len(nums)

	dp := make([]int64, n)
	dp[0] = max(int64(k - nums[0]), 0)
	dp[1] = max(int64(k - nums[1]), 0)
	dp[2] = max(int64(k - nums[2]), 0)

	for i := 3; i < n; i++ {
		dp[i] = min3(dp[i - 1], dp[i - 2], dp[i - 3]) + max(int64(k - nums[i]), 0)
	}

	return min3(dp[n - 1], dp[n - 2], dp[n - 3])
}
```