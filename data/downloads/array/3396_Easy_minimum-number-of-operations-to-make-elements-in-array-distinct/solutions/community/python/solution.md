# [Python] Greedy

**Author:** pbelskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6173106/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6173106/)

---

```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        ops = 0

        while len(set(nums)) != len(nums):
            nums = nums[3:]
            ops += 1
            
        return ops
```