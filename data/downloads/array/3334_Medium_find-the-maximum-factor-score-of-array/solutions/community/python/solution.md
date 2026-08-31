# Python3 Brute Force

**Author:** TKR_6
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5992139/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5992139/)

---



# Code
```python3 []
class Solution:
    def maxScore(self, nums: List[int]) -> int:

        ans=lcm(*nums)*gcd(*nums)
        n=len(nums)

        for i in range(n):
            sub=nums[:i]+nums[i+1:]
            l=lcm(*sub)
            g=gcd(*sub)
            ans=max(ans,l*g)
    
        return ans
        
```