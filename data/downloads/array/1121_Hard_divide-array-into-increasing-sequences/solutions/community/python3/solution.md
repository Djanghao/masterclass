# Python O(N) - One Line - Max Freq

**Author:** ilkercankaya
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/334194/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/334194/)

---

```
import collections


class Solution:
    def canDivideIntoSubsequences(self, nums, K: int) -> bool:
        return max(collections.Counter(nums).values()) * K <= len(nums)
```