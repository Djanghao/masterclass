# Python, one liner

**Author:** blue_sky5
**Votes:** 14
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1924770/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1924770/)

---

```
class Solution:
    def isConsecutive(self, nums: List[int]) -> bool:
        return max(nums) - min(nums) + 1 == len(nums) == len(set(nums))
```