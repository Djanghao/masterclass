# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/3179480/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/3179480/)

---


```
class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
            replacements = {}
            for x, y in reversed(operations):
                replacements[x] = replacements.get(y, y)
            for idx, val in enumerate(nums):
                if val in replacements:
                    nums[idx] = replacements[val]
            return nums
```