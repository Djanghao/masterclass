# C#, Fast, easy to understand

**Author:** hafthor
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/5087954/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/5087954/)

---

# Intuition
There are three main techniques being used here. First, we need to count the number of 2s and 5s in each cell and sum those so we can use the smaller count to know how many trailing zeros a result will have. We also store the sum of the 2s and 5s by row and column to make the calculations faster (dynamic programming). We then traverse the grid to pick the elbow of the path and consider each direction from that cell to the grid edge and find the best path.

# Approach
First pass through the grid factors the 2s and 5s from the cell value and stores that along with accumulating row and column sums.
Second pass through the grid chooses the elbow of the path and gets the counts going in all directions from that cell to find the maximum number of trailing zeros, which is the maximum of the smaller of the 2s count or 5s count.

# Complexity
- Time complexity: O(mn)
- Space complexity: O(mn)

# Code
```
public class Solution {
    public int MaxTrailingZeros(int[][] grid) {
        int m = grid.Length, n = grid[0].Length, result = 0;
        int[,] grid2 = new int[m, n], grid5 = new int[m, n],
            rowSum2 = new int[m, n], rowSum5 = new int[m, n],
            colSum2 = new int[m, n], colSum5 = new int[m, n];

        // Step 1: Calculate the number of 2s and 5s in each cell and the row and column sums
        for (int y = 0; y < m; y++) {
            for (int x = 0; x < n; x++) {
                int g = grid[y][x], g2 = 0, g5 = 0;
                // count the number of 2s and 5s in the cell
                for (; g % 2 == 0; g /= 2) g2++;
                for (; g % 5 == 0; g /= 5) g5++;
                grid2[y, x] = g2;
                grid5[y, x] = g5;
                // calculate the row and column sums
                rowSum2[y, x] = g2 + (x > 0 ? rowSum2[y, x - 1] : 0);
                rowSum5[y, x] = g5 + (x > 0 ? rowSum5[y, x - 1] : 0);
                colSum2[y, x] = g2 + (y > 0 ? colSum2[y - 1, x] : 0);
                colSum5[y, x] = g5 + (y > 0 ? colSum5[y - 1, x] : 0);
            }
        }

        // Step 2: Calculate the maximum trailing zeros for each cell in each direction.
        // The maximum trailing zeros is the minimum of the count of 2s and 5s.
        for (int y = 0; y < m; y++) {
            for (int x = 0; x < n; x++) {
                // count of 2s and 5s in the up, down, left, and right directions
                int up2 = colSum2[y, x], up5 = colSum5[y, x]; // includes grid[y, x]
                int dn2 = colSum2[m - 1, x] - up2, dn5 = colSum5[m - 1, x] - up5; // doesn't include grid[y, x]
                int lf2 = rowSum2[y, x], lf5 = rowSum5[y, x]; // includes grid[y, x]
                int rt2 = rowSum2[y, n - 1] - lf2, rt5 = rowSum5[y, n - 1] - lf5; // doesn't include grid[y, x]
                int g2 = grid2[y, x], g5 = grid5[y, x];
                // trailing zeros for up-left, up-right, down-left, down-right
                int ul = Math.Min(up2 + lf2 - g2, up5 + lf5 - g5); // adjusted for double include grid[y, x]
                int ur = Math.Min(up2 + rt2, up5 + rt5);
                int dl = Math.Min(dn2 + lf2, dn5 + lf5);
                int dr = Math.Min(dn2 + rt2 + g2, dn5 + rt5 + g5); // adjusted for double exclude grid[y, x]
                // maximum trailing zeros so far
                result = Math.Max(result, Math.Max(Math.Max(ul, ur), Math.Max(dl, dr)));
            }
        }
        
        return result;
    }
}
```