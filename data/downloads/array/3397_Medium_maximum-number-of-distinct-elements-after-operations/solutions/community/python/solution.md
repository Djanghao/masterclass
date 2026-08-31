# [Python] Sort + greedy

**Author:** pbelskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6174010/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6174010/)

---

```
"""
Greedy, sort nums, and then try increase it to compare 
with previois maximum number.

TC: O(sort)
SC: O(sort)
"""
class Solution:
    def maxDistinctElements(self, nums: List[int], k: int) -> int:
        nums.sort()
        
        # first decrease all elements to -k
        for i in range(len(nums)):
            nums[i] -= k
        
        # try to increase each next at most k*2
        m = nums[0]
        for i in range(1, len(nums)):
            if nums[i] > m:
                m = nums[i]
                continue
            
            # calculate difference
            d = m - nums[i] + 1
            if d > k*2:
                continue

            # increase and save new max
            nums[i] += d
            m = nums[i]

        return len(set(nums))
```