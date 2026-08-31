# [100%/100%] Mathematical, Easy to Understand, Explanation

**Author:** laprade
**Votes:** 1
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/564063/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/564063/)

---

Thought Process
-
The point of the square closest to the circle must be within the circle if any of the square is within the circle. This closest point is on the edge of the square, possible a corner. It's either lined up with the ```(x,y)``` coordinates of the circle's center, or as close as it can get. The distance from this point is then compared to the radius of the circle.

Algorithm
-
```
public class Solution {
    public bool CheckOverlap(int radius, int x_center, int y_center, int x1, int y1, int x2, int y2) {
        var x_square = ClosestToCenter(x_center, x1, x2);
        var y_square = ClosestToCenter(y_center, y1, y2);
        return DistanceSquared(x_center - x_square, y_center - y_square) <= radius * radius;
    }
    
    private static int ClosestToCenter(int a_center, int a1, int a2) {
        return a_center < a1 ? a1 : a_center > a2 ? a2 : a_center;
    }
    
    private static int DistanceSquared(int x, int y) {
        return x*x + y*y;
    }
}
```

Proof
-
![image](./images/0.png)
