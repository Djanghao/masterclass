# python DP : reduced to house robber

**Author:** fieryflurry
**Votes:** 80
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/703463/](https://leetcode.com/problems/delete-and-earn/solutions/703463/)

---

Once you store the frequency of each number, you can easily see that it is like the House Robber problem:

```
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        if  not nums:
            return 0

        freq = [0] * (max(nums)+1)
        for n in nums:
            freq[n] += n

        dp = [0] * len(freq)
        dp[1] = freq[1]
        for i in range(2, len(freq)):
            dp[i] = max(freq[i] + dp[i-2], dp[i-1])

        return dp[len(freq)-1]
```