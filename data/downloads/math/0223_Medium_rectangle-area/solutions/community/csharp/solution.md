# C# Solution | Math Problem

**Author:** anshulgarg904
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/2822788/](https://leetcode.com/problems/rectangle-area/solutions/2822788/)

---

# Intuition
Find the total area and subtract the overlapping area (if any).

# Approach
1. Check if the rectangles have overlapping area. If not, return the complete area covered by rectangles.
2. Find out the coordinates for the overlapping area.
3. Find total area covered by rectangles - overlapping area.

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
public class Solution {
    public int ComputeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        if(ax1 > bx2 || bx1 > ax2 || ay1 > by2 || by1 > ay2)
            return (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1);

        int x1 = ax1 > bx1 ? ax1 : bx1;
        int y1 = ay1 > by1 ? ay1 : by1;
        int x2 = ax2 < bx2 ? ax2 : bx2;
        int y2 = ay2 < by2 ? ay2 : by2;


        return (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1) - (y2-y1)*(x2-x1);
    }
}
```