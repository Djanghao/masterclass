# [Python 3] Triangle Area

**Author:** hari19041
**Votes:** 24
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1985698/](https://leetcode.com/problems/valid-boomerang/solutions/1985698/)

---

**Concept:** We need to check if the 3 points are in a straight line or not.
Math: We can find the area of the triangle formed by the three points and check if the area is non-zero.
**DO UPVOTE IF YOU FOUND IT HELPFUL.**


```
class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
        x1, y1 = points[0]
        x2, y2 = points[1]
        x3, y3 = points[2]
        
        area = abs(x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2))/2
        return area != 0
```