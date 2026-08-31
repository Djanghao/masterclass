# easiest solution in solutions

**Author:** Sajal_
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/4929713/](https://leetcode.com/problems/first-missing-positive/solutions/4929713/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
convert nums to set 
using a for loop iterate upto length of set + 2 in case if the set contains all the values from 1 to len(nums) then we need len(nums)+1 as the answer 
return i if i not in nums


# Code
```
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        nums = set(nums)
        for i in range(1,len(nums)+2):
            if i not in nums:
                return i
            
```