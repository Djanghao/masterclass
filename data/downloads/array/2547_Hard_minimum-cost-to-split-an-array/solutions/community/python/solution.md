# python3 Solution

**Author:** Motaharozzaman1996
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084878/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084878/)

---


```
class Solution:
    def minCost(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dp = [inf]*(n+1)
        dp[-1] = 0 
        for i in range(n-1, -1, -1): 
            val = 0 
            freq = Counter()
            for ii in range(i, n): 
                freq[nums[ii]] += 1
                if freq[nums[ii]] == 2: val += 2
                elif freq[nums[ii]] > 2: val += 1
                dp[i] = min(dp[i], k + val + dp[ii+1])
        return dp[0]
```