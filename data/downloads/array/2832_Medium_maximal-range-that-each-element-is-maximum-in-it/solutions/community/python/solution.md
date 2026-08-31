# [Python]✅ Monotonic Stack - Easy O(n)

**Author:** inosigu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/6160825/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/6160825/)

---

```
class Solution:
    def maximumLengthOfRanges(self, nums: List[int]) -> List[int]:
        nums.append(float("inf"))
        stack = []
        for i in range(len(nums)):
            while stack and nums[stack[-1]] < nums[i]:
                index = stack.pop()
                nums[index] = i - stack[-1]-1 if stack else i
            stack.append(i)
        nums.pop()
        return nums
```