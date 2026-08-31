# Python 3 || 6 lines, binary search || T/S: 66% /  37%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017593/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017593/)

---

```
class Solution:
    def minRectanglesToCoverPoints(self, points: List[List[int]], w: int) -> int:
    
        x = sorted(list(zip(*points))[0])
        n, cnt, ptr = len(x), 0, 0

        while ptr < n:
            ptr = bisect_right(x, x[ptr]+w, lo = ptr)
            cnt+= 1
     
        return cnt
```

[https://leetcode.com/problems/minimum-rectangles-to-cover-points/submissions/1266889158/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/submissions/1266889158/)


I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(points)`.