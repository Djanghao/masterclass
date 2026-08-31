# [Go] DP: O(N) & O(1)

**Author:** akash__gupta
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298769/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298769/)

---

```
func maxAlternatingSum(nums []int) int64 {
    dp := make(map[int64]int64, 2)
    for i := 0; i < len(nums); i++ {
        x := dp[1] + int64(nums[i])
        if x > dp[0]{
            dp[0] = x
        }
        y := dp[0] - int64(nums[i])
        if y > dp[1]{
            dp[1] = y
        }
    }
    return dp[0];
}