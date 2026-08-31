# [Python3] 2 lines solution (sorting and 2 pointers)

**Author:** yourick
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5525046/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5525046/)

---

```python3 []
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums.sort()
        return min((nums[i] + nums[~i]) / 2 for i in range(len(nums)//2))
```