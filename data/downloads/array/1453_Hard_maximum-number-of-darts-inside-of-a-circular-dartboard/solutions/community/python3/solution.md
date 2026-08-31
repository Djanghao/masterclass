# [Python3] angular sweep O(N^2 logN)

**Author:** ye15
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636439/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/636439/)

---

Algo
Pick a point, say P, from the set, and rotate a circle with fixed-radius `r`. During the rotation P lies on the circumference of the circle (note P is not the center) and maintain a count of the number of points in the circle at an angle \u0398 (between PC and x-axis, where C is the center of the circle). 

For every other point Q within `2*r` distance to P, compute the angle \u0398 when Q enters the circle and the angle \u0398 when Q exits the circle with math. Sort the angles and scan through it to check the maximum points in the circle. 

Perform the above operation for all points to find the maximum. 

Implementation (time complexity `O(N^2 logN)` | space complexity `O(N)`) 
```
class Solution:
    def numPoints(self, points: List[List[int]], r: int) -> int:
        ans = 1
        for x, y in points: 
            angles = []
            for x1, y1 in points: 
                if (x1 != x or y1 != y) and (d:=sqrt((x1-x)**2 + (y1-y)**2)) <= 2*r: 
                    angle = atan2(y1-y, x1-x)
                    delta = acos(d/(2*r))
                    angles.append((angle-delta, +1)) #entry
                    angles.append((angle+delta, -1)) #exit
            angles.sort(key=lambda x: (x[0], -x[1]))
            val = 1
            for _, entry in angles: 
                ans = max(ans, val := val+entry)
        return ans 
```