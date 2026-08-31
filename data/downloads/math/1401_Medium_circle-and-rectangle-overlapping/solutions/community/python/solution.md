# Python - Easy geometry

**Author:** m3xwell
**Votes:** 2
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3370592/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3370592/)

---

First we have to find the nearest point on the rectangle to the center of the circle. Calculate the distance between the center of the circle with the nearest x and y coordinates. We can check the intersection by using pythagorean theorem. A point lies inside the circle if distance < radius. A point lies on the circle if d = radius. 
So we return check if distance <= radius. 

# Code
```
class Solution:
    def checkOverlap(self, radius: int, xCenter: int, yCenter: int, x1: int, y1: int, x2: int, y2: int) -> bool:
        nearest_x = max(x1, min(x2, xCenter))
        nearest_y = max(y1, min(y2, yCenter))
        dist_x = nearest_x - xCenter
        dist_y = nearest_y - yCenter

        return dist_x ** 2 + dist_y ** 2 <= radius ** 2
```