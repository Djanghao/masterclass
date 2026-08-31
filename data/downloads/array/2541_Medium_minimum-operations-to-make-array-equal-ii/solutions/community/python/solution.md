# [Python] balance of diff O(N)

**Author:** pbelskiy
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082409/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082409/)

---

```python
class Solution:
    def minOperations(self, nums1: List[int], nums2: List[int], k: int) -> int:
        if nums1 == nums2:
            return 0

        if k == 0:
            return -1

        # get positive and negative sum of diffs
        lo, hi = 0, 0
        for a, b in zip(nums1, nums2):
            d = a - b
            if d % k != 0:
                return -1

            if d < 0:
                lo += d
            else:
                hi += d

        # not balanced
        if lo + hi != 0:
            return -1
        
        return hi // k
```