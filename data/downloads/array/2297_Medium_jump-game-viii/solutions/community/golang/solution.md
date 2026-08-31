# Go | Monostack + DP | One run

**Author:** smafjal
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/5011305/](https://leetcode.com/problems/jump-game-viii/solutions/5011305/)

---

# Code
```
func minCost(nums []int, costs []int) int64 {
    n := len(nums)
    var nge []int
    var nse []int
    dp := make([]int64, n)

    for i := 0; i < n; i++ {
        dp[i] = int64(1<<62)
    }

    min := func (a, b int64) int64{
        if a < b {
            return a
        }
        return b
    }

    dp[0] = 0
    for i:=0; i < n; i++ {
        for len(nge) > 0 && nums[i] >= nums[nge[len(nge)-1]] {
            ele := nge[len(nge)-1]
            nge = nge[:len(nge)-1]
            dp[i] = min(dp[i], int64(costs[i]) + dp[ele])
        }
        for len(nse) > 0 && nums[i] < nums[nse[len(nse)-1]] {
            ele := nse[len(nse)-1]
            nse = nse[:len(nse)-1]
            dp[i] = min(dp[i], int64(costs[i]) + dp[ele])
        }
        nge = append(nge, i)
        nse = append(nse, i)
    }
    return dp[len(dp)-1]
}



```