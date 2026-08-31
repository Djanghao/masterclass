# [Python3] line sweep

**Author:** ye15
**Votes:** 77
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1152412/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1152412/)

---


```
class Solution:
    def arraySign(self, nums: List[int]) -> int:
        ans = 1
        for x in nums: 
            if x == 0: return 0 
            if x < 0: ans *= -1
        return ans 
```