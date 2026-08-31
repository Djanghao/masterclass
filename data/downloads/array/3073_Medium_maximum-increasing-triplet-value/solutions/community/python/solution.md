# SortedList Solution | Python

**Author:** wxy0925
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4834811/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4834811/)

---

```
from sortedcontainers import SortedList
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        n = len(nums)
        right_largest = [0] * (n - 1)
        for i in range(n-2, -1, -1):
            if i == n - 2:
                    right_largest[i] = nums[i+1]
            else:
                right_largest[i] = max(right_largest[i+1], nums[i+1])
        
        
        s = SortedList([nums[0]])
        res = 0
        for i in range(1, n-1):
            if right_largest[i] > nums[i]:
                idx = s.bisect_left(nums[i])
                if idx > 0:
                    res = max(res, s[idx-1] + right_largest[i] - nums[i])
            s.add(nums[i])
            # print(s)
        return res
```