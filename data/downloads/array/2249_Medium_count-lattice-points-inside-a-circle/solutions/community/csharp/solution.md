# pythagoras, circle in square, hashset, tuple

**Author:** RIVLTAdbyD
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5105523/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5105523/)

---

# Intuition
think of the circle is within a square, u can get the bottom left corner to the top right corner using the center point and radius, then use pythagoras to check if the point is in circle, 
x-distance^2 + y-distance^2 = radius^2.
use HashSet to remove dupe, use tuple of (int,int) to reduce memory.


# Code
```

public class Solution
{
    public int CountLatticePoints(int[][] circles)
    {
        /// hash remove dupe
        HashSet<(int, int)> coor = new();
        foreach (int[] circle in circles)
        {
            int cX = circle[0], cY = circle[1], r = circle[2];

            /// diameter along x axis
            for (int x = cX - r; x <= cX + r; x++)
            {
                /// diameter along y axis
                for (int y = cY - r; y <= cY + r; y++)
                {
                    /// pythagoras 
                    if ((((cX-x) * (cX-x)) + ((cY-y) * (cY-y))) <= r * r)
                    {
                        coor.Add((x, y));
                    }
                }
            }
        }
        return coor.Count;
    }
}
```