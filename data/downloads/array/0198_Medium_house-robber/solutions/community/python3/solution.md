# Python dynamic-programming easy solution faster than 95%

**Author:** YehudisK
**Votes:** 53
**Link:** [https://leetcode.com/problems/house-robber/solutions/846002/](https://leetcode.com/problems/house-robber/solutions/846002/)

---

```
class Solution:
    def rob(self, nums: List[int]) -> int:
        # edge cases:
        if len(nums) == 0: return 0
        if len(nums) == 1: return nums[0]
        if len(nums) == 2: return max(nums)
        
        # dynamic programming - decide each problem by its sub-problems:
        dp = [0]*len(nums)
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, len(nums)):
            dp[i] = max(dp[i-1], nums[i]+dp[i-2])
        
        return dp[-1]
```