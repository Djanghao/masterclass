# Python, heap

**Author:** pkarateev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052328/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052328/)

---

# Complexity

- Time complexity: $$O(n\\log{n})$$
- Space complexity: $$O(n)$$

# Code

```python
import heapq
from collections import Counter


class Solution:
    def minLengthAfterRemovals(self, nums: list[int]) -> int:
        counts = [-x for x in Counter(nums).values()]
        heapq.heapify(counts)

        while len(counts) > 1:
            a = -heapq.heappop(counts)
            b = -heapq.heappop(counts)

            if a > 1:
                heapq.heappush(counts, -a + 1)
            if b > 1:
                heapq.heappush(counts, -b + 1)

        return -sum(counts)
```
