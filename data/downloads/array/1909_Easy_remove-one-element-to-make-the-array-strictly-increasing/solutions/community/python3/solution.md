# [Python3] collect non-conforming indices

**Author:** ye15
**Votes:** 18
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1298457/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1298457/)

---


```
class Solution:
    def canBeIncreasing(self, nums: List[int]) -> bool:
        stack = []
        for i in range(1, len(nums)): 
            if nums[i-1] >= nums[i]: stack.append(i)
                
        if not stack: return True 
        if len(stack) > 1: return False
        i = stack[0]
        return (i == 1 or nums[i-2] < nums[i]) or (i+1 == len(nums) or nums[i-1] < nums[i+1])
```

```
class Solution:
    def canBeIncreasing(self, nums: List[int]) -> bool:
        prev, seen = -inf, False
        for i, x in enumerate(nums): 
            if prev < x: prev = x
            else: 
                if seen: return False 
                seen = True 
                if i == 1 or nums[i-2] < x: prev = x
        return True 
```