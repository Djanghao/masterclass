# Python3, Monostack + DP

**Author:** nguyenvothuan
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/4236694/](https://leetcode.com/problems/jump-game-viii/solutions/4236694/)

---



# Code
```
class Solution:
    def minCost(self, nums: List[int], costs: List[int]) -> int:
        n = len(nums)
        ng, nl, dp = []*n,[]*n, [math.inf]*n
        dp[0] = 0
        for i in range(n):
            while ng and nums[ng[-1]] <= nums[i]:
                dp[i] = min(dp[i], dp[ng.pop()] + costs[i])
            while nl and nums[nl[-1]] > nums[i]:
                dp[i] = min(dp[i], dp[nl.pop()] + costs[i])
            ng.append(i)
            nl.append(i)
        return dp[n-1]
```