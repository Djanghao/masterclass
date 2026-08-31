# [Python3] center point O(N^2)

**Author:** ye15
**Votes:** 42
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/980956/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/980956/)

---

**Algo**
Use a 2-layer nested loops to scan through pair of points `(x0, y0)` and `(x1, y1)`. The key features extracted from this pair are center and length `(cx, cy, d2)`. Those points with the same center and length form rectangles. 

**Implementation**
```
class Solution:
    def minAreaFreeRect(self, points: List[List[int]]) -> float:
        ans = inf
        seen = {}
        for i, (x0, y0) in enumerate(points):
            for x1, y1 in points[i+1:]:
                cx = (x0 + x1)/2
                cy = (y0 + y1)/2
                d2 = (x0 - x1)**2 + (y0 - y1)**2
                for xx, yy in seen.get((cx, cy, d2), []): 
                    area = sqrt(((x0-xx)**2 + (y0-yy)**2) * ((x1-xx)**2 + (y1-yy)**2))
                    ans = min(ans, area)
                seen.setdefault((cx, cy, d2), []).append((x0, y0))
        return ans if ans < inf else 0
```

**Analysis**
Time complexity `O(N^2)`
Space complexity `O(N^2)`

The worse case of this approach is `O(N^3)`. Imagine that all points are distributed on a circle. In this case, one could find `N/2` pairs whose center is at the center of the circle. In extreme cases like this, one would have `O(N^3)` performance. But on average, `O(N^2)` can be expected.