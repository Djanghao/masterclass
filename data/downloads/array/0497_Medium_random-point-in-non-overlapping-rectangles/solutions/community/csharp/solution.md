# Based on the area

**Author:** gorums
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4828344/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4828344/)

---

# Intuition
Using copilot

# Approach
1.	Initialization (Solution constructor): The algorithm starts by calculating the area of each rectangle. The area is calculated as (x2 - x1 + 1) * (y2 - y1 + 1), where (x1, y1) are the coordinates of the bottom-left corner and (x2, y2) are the coordinates of the top-right corner. The "+1" is because the points on the rectangle's perimeter are included. The areas are accumulated in the areas array. This array will be used to pick a rectangle with a probability proportional to its area.
2.	Pick a rectangle: When the Pick method is called, the algorithm first needs to decide which rectangle to pick a point from. This is done by generating a random number between 1 and the total area of all rectangles (which is the last element in the areas array). Then, it uses a binary search (Array.BinarySearch) to find the index of the rectangle that this random number falls into. The binary search returns the index of the first rectangle in areas where the cumulative area is greater than or equal to the random number. This way, rectangles with larger areas (and thus larger ranges in the areas array) are more likely to be chosen.
3.	Pick a point within the rectangle: Once a rectangle is chosen, the algorithm generates two more random numbers: one for the x-coordinate and one for the y-coordinate. These numbers are between the minimum and maximum x and y values of the rectangle, respectively. The point with these x and y coordinates is the point that the Pick method returns.

# Complexity
- Time complexity:
$$O(log n)$$

- Space complexity:
$$O(n)$$

# Code
```
using System;
using System.Linq;

public class Solution {

    private int[][] rects;
    private int[] areas;
    private Random rand = new Random();

    public Solution(int[][] rects) {
        this.rects = rects;
        this.areas = new int[rects.Length];
        int totalArea = 0;
        for (int i = 0; i < rects.Length; i++)
        {
            // calculate the area of the rectangle
            int area = (rects[i][2] - rects[i][0] + 1) * (rects[i][3] - rects[i][1] + 1);
            totalArea += area;
            this.areas[i] = totalArea;
        }
    }
    
    public int[] Pick() {
         // pick a rectangle
        int randArea = rand.Next(areas.Last()) + 1;
        int index = Array.BinarySearch(areas, randArea);
        if (index < 0)
            index = ~index;

        // pick a point within the rectangle
        int[] rect = rects[index];
        int x = rand.Next(rect[0], rect[2] + 1);
        int y = rand.Next(rect[1], rect[3] + 1);
        return new int[] { x, y };
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(rects);
 * int[] param_1 = obj.Pick();
 */
```