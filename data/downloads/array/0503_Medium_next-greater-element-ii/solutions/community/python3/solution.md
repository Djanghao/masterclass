# [Python] Simple 2 pass solution using stack, 99% faster

**Author:** 101leetcode
**Votes:** 16
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/703473/](https://leetcode.com/problems/next-greater-element-ii/solutions/703473/)

---

```
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        ## RC ##
        ## APPROACH : STACK ##
        ## Similar to leetcode 739. Daily Temperatures ##
        
        ## LOGIC ##
        ## 1. Monotone decreasing stack to find NGE (next greater element)
        ## 2. In the first loop, we fill NGE all possible.
        ## 3. In the second loop, there might be some elements left in the stack, so we iterate again (without appending to stack) and get NGE
        ## 4. The elements that are left in the stack even after second loop are max(nums).
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(N) ##

        stack, res = [], [-1] * len(nums)
        for i, num in enumerate(nums):              # 2
            while stack and nums[stack[-1]] < num:
                res[stack.pop()] = num
            stack.append(i)
        for i, num in enumerate(nums):              # 3
            while stack and nums[stack[-1]] < num:
                res[stack.pop()] = num
        return res
```