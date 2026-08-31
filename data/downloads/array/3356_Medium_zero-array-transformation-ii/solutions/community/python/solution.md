# Python Binary Search

**Author:** tonyluitonylui
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6110146/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6110146/)

---

```python
from itertools import accumulate
from typing import TypeAlias

Query: TypeAlias = tuple[int, int, int]


class Solution:
    def minZeroArray(self, nums: list[int], queries: list[Query]) -> int:
        def is_possible(queries: list[Query]) -> bool:
            diff = [0] * len(nums)

            for l, r, val in queries:
                diff[l] += val
                if r + 1 < len(nums):
                    diff[r + 1] -= val

            return all(n <= max_dec for n, max_dec in zip(nums, accumulate(diff)))

        lo, hi = 0, len(queries)
        k = -1

        while lo <= hi:
            mid = (lo + hi) // 2
            if is_possible(queries[:mid]):
                hi = mid - 1
                k = mid
            else:
                lo = mid + 1

        return k
```