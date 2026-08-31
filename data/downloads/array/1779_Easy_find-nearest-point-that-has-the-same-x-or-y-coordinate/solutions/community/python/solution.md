# [Python] Easy solution

**Author:** arkumari2000
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1229047/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1229047/)

---

```
class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        minDist = math.inf
        ans = -1
        for i in range(len(points)):
            if points[i][0]==x or points[i][1]==y:
                manDist = abs(points[i][0]-x)+abs(points[i][1]-y)
                if manDist<minDist:
                    ans = i
                    minDist = manDist
        return ans
        
```