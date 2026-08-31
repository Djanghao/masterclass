# Python beats 99%, use string

**Author:** zzj8222090
**Votes:** 58
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/892927/](https://leetcode.com/problems/three-consecutive-odds/solutions/892927/)

---

```
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        return "111" in "".join([str(i%2) for i in arr])
```