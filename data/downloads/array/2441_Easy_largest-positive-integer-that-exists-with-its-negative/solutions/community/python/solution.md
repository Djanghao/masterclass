# Python  ||     2 lines,  T/S: 97%/ 77%

**Author:** Spaulding_
**Votes:** 24
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2711038/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/2711038/)

---

```
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums = set(nums)
        return max(({x for x in nums if -x in nums}), default=-1)
```
[https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/submissions/1246950981/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/submissions/1246950981/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(set(nums))`.