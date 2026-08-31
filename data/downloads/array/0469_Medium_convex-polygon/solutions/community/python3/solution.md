# Python

**Author:** vyacheslavusmanov
**Votes:** 2
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/4525475/](https://leetcode.com/problems/convex-polygon/solutions/4525475/)

---

Checking all angles (inner and outer)...


# Code
```
class Solution:
    def isConvex(self, points: List[List[int]]) -> bool:

        points.append(points[0])
        points.append(points[1])

        def getAngle(a, b, c):
            ang = math.degrees(math.atan2(c[1]-b[1], c[0]-b[0]) - math.atan2(a[1]-b[1], a[0]-b[0]))
            return ang + 360 if ang < 0 else ang
        
        inner, outer = True, True
        for i in range(1, len(points)-1):
            angle = getAngle(points[i-1], points[i], points[i+1])
            if 360 - angle > 180:
                inner = False
            if angle > 180:
                outer = False
        
        return inner or outer

```