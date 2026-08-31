# simple and easy Python solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5406212/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5406212/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution(object):
    def sumOfSquares(self, nums):
        ans, n = 0, len(nums)
        for i in range(n):
            if not n%(i+1):
                ans += (nums[i]*nums[i])
        return ans
```