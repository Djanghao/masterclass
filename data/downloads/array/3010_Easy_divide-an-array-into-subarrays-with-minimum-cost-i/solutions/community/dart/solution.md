# take first element sort remaining and take first 2 elements add it all . Thats it

**Author:** Sajal_
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4792749/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4792749/)

---


---
# Code
```
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        return nums[0] + sum(sorted(nums[1:])[:2])


```