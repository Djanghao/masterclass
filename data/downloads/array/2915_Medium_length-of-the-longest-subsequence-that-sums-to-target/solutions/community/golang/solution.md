# GoLang Solution DP 1D (easy understand)

**Author:** chong4165
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218892/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218892/)

---


# Code
```
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func lengthOfLongestSubsequence(nums []int, target int) int {
    dp := make([]int, target + 1)
    
	for i := range dp {
		dp[i] = -1
	}
	dp[0] = 0
    for i := range nums {
        for j := target; j > 0; j-- {
            if (j - nums[i] >= 0) && (dp[j - nums[i]] != -1){
                dp[j] = max(dp[j], dp[j - nums[i]] + 1)
            }
            //fmt.Println(dp)
        }
    }
    //fmt.Println(dp)
    return dp[target]
}

```