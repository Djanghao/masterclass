# Very very easy code in just 3 lines using Python

**Author:** ankurbhambri
**Votes:** 54
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2507825/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2507825/)

---

```
class Solution:
    def countElements(self, nums: List[int]) -> int:
        mn = min(nums)
        mx = max(nums)
        return sum(1 for i in nums if mn < i < mx)
```