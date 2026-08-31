# [Python] Fast and clear solution with explanation

**Author:** modusV
**Votes:** 51
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/968076/](https://leetcode.com/problems/perfect-rectangle/solutions/968076/)

---

We need to check two things:
- the external corners must appear only once, and the ones inside have to be an even number (we filter them with xor).
- the total area of all the rectangles together, has to be equal to the area created by the external corners
```
class Solution:
    def isRectangleCover(self, rectangles: List[List[int]]) -> bool:
        
        area = 0
        corners = set()
        a = lambda: (Y-y) * (X-x)
        
        for x, y, X, Y in rectangles:
            area += a()
            corners ^= {(x,y), (x,Y), (X,y), (X,Y)}

        if len(corners) != 4: return False
        x, y = min(corners, key=lambda x: x[0] + x[1])
        X, Y = max(corners, key=lambda x: x[0] + x[1])
        return a() == area
```