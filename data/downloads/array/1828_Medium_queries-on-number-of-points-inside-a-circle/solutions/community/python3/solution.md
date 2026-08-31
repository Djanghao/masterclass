# Python One-liner

**Author:** Black_Pegasus
**Votes:** 28
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163133/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/1163133/)

---

```
class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        return [sum(math.sqrt((x0-x1)**2 + (y0-y1)**2) <= r for x1, y1 in points) for x0, y0, r in queries]
```