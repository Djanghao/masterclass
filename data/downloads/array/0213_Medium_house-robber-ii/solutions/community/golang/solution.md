# Base on knapsack - House rob without circle

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/2248653/](https://leetcode.com/problems/house-robber-ii/solutions/2248653/)

---

```
func rob(nums []int) int {
    if len(nums) == 0 { return 0 }
    if len(nums) == 1 { return nums[0] }

    return max(robWithoutCircle(nums[1:]), robWithoutCircle(nums[:len(nums)-1]))
}

func robWithoutCircle(nums []int) int {
    if len(nums) == 0 { return 0 }
    if len(nums) == 1 { return nums[0] }
    
    dp := make([]int, len(nums)+1)
    dp[0] = 0
    dp[1] = nums[0]
    
    for i := 1; i < len(nums); i++ {
        dp[i+1] = max(dp[i], nums[i] + dp[i-1])
    }
    
    return dp[len(nums)]
}

func max(a, b int) int {
    if a > b { return a }
    return b
}

```