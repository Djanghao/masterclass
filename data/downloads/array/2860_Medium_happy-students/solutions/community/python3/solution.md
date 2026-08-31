# ✅Simple and Clear Python3 Code✅

**Author:** moazmar
**Votes:** 7
**Link:** [https://leetcode.com/problems/happy-students/solutions/4131156/](https://leetcode.com/problems/happy-students/solutions/4131156/)

---



# Code
```
class Solution:
    def countWays(self, nums: List[int]) -> int:
        n=len(nums)
        res=0
        nums.sort()
        if nums[0]>0:
            res+=1
        if nums[-1]<n:
            res+=1

        for i in range(n-1):
            s = i+1
            if nums[i]<s and nums[i+1]>s:
                res+=1
        return res

```