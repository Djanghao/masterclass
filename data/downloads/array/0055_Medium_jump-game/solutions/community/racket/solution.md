# 🌀 Leap to the End: Smart Steps to Conquer the Jump Game 🎯

**Author:** inavadeep1205
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game/solutions/5834686/](https://leetcode.com/problems/jump-game/solutions/5834686/)

---



# Code
```python []
class Solution(object):
    def canJump(self, nums):
        if len(nums) <= 1:
            return True
        
        max_reachable = 0
        
        for x in range(len(nums)):
            if x > max_reachable:
                return False
            max_reachable = max(max_reachable, x + nums[x])
            if max_reachable >= len(nums) - 1:
                return True
        
        return False

```