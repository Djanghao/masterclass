# [Python3] Kadane-ish DP

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2797405/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/2797405/)

---


```
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        ans = cnt = 0 
        for i, x in enumerate(nums): 
            if i and nums[i-1] >= nums[i]: cnt = 0
            cnt += 1
            ans += cnt 
        return ans 
```