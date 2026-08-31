# Python | DP | Easy to understand

**Author:** Coder1918
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4949608/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4949608/)

---

```
class Solution:
    def countAlternatingSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [1] * n
        
        for i in range(1, n):
            if nums[i-1] != nums[i]:
                dp[i] = dp[i - 1] + 1
        
        return sum(dp)
```