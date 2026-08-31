# Target is always K distant from some element

**Author:** theabbie
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6027133/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6027133/)

---

```
import bisect

class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int) -> int:
        nums.sort()
        ctr = Counter(nums)
        s = set()
        for el in nums:
            s.add(el)
            s.add(el - k)
            s.add(el + k)
        res = 0
        for el in s:
            res = max(res, ctr[el] + min(bisect.bisect_right(nums, el + k) - bisect.bisect_left(nums, el - k) - ctr[el], numOperations))
        return res
```