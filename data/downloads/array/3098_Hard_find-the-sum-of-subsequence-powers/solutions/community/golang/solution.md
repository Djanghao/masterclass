# 🎇Runtime 21 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/5141227/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/5141227/)

---

# Code
```
const MOD = 1000000007

func sumOfPowers(nums []int, k int) int {
	len := len(nums)
	sort.Ints(nums)
	dp := make(map[int]int)
	res := 0
	for i := 0; i <= len-k; i++ {
		res = (res + dfs(i, k-1, nums[len-1]-nums[0], dp, nums)) % MOD
	}
	return res
}

func dfs(lastIdx, k, minDiff int, dp map[int]int, nums []int) int {
	if k == 0 {
		return minDiff
	}

	key := ((minDiff << 12) + (lastIdx << 6) + k)
	if val, ok := dp[key]; ok {
		return val
	}

	res := 0
	for i := lastIdx + 1; i <= len(nums)-k; i++ {
		res = (res + dfs(i, k-1, min(minDiff, nums[i]-nums[lastIdx]), dp, nums)) % MOD
	}

	dp[key] = res
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```