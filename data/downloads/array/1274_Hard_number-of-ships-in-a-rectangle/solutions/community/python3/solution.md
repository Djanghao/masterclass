# [Python3] Very Simple Recursive Solution

**Author:** Samuel3Shin
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3987043/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3987043/)

---

# Code
```
class Solution:
    def countShips(self, sea: 'Sea', topRight: 'Point', bottomLeft: 'Point') -> int:
        def helper(x1, y1, x2, y2):
            if x1 > x2 or y1 > y2:
                return 0
            if sea.hasShips(Point(x2, y2), Point(x1, y1)):
                if x1==x2 and y1==y2:
                    return 1
                cx = (x1+x2)//2
                cy = (y1+y2)//2

                bl = helper(x1, y1, cx, cy)
                br = helper(cx+1, y1, x2, cy)
                tl = helper(x1, cy+1, cx, y2)
                tr = helper(cx+1, cy+1, x2, y2)
                return bl+br+tl+tr
            else:
                return 0
        return helper(bottomLeft.x, bottomLeft.y, topRight.x, topRight.y)
```