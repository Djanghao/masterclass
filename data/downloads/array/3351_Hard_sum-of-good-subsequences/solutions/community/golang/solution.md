# Go || DP || O(n)

**Author:** ligt
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028706/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6028706/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
const MOD = 1_000_000_007

func sumOfGoodSubsequences(nums []int) int {
	dp := make([][2]int, slices.Max(nums) + 2)
	for i := range nums {
		sum := nums[i]
		dp[nums[i]][0] += 1
		if nums[i]-1 >= 0 {
			sum = (sum + dp[nums[i]-1][1] + (nums[i]*dp[nums[i]-1][0])%MOD)%MOD
			dp[nums[i]][0] = (dp[nums[i]][0] + dp[nums[i]-1][0]) % MOD
		}
		sum = (sum + dp[nums[i]+1][1] + nums[i]*dp[nums[i]+1][0]%MOD)%MOD
		dp[nums[i]][0] = (dp[nums[i]][0] + dp[nums[i]+1][0]) % MOD
		dp[nums[i]][1] = (dp[nums[i]][1] + sum) % MOD
	}

	res := 0
	for i := range dp {
		res = (res + dp[i][1]) % MOD
	}

	return res
}
```