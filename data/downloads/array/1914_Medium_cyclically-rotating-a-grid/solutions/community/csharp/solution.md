# C# solution. Time is a bit high at O(mnk)

**Author:** sharramon
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/3604981/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/3604981/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
public class Solution {\r
\r
    public int[][] RotateGrid(int[][] grid, int k) {\r
\r
        int gridRowLength = grid.Length;\r
        int gridColLength = grid[0].Length;\r
\r
        int top = 0;\r
        int bottom = gridRowLength - 1;\r
        int left = 0;\r
        int right = gridColLength - 1;\r
\r
        while(top < bottom && left < right) {\r
            int layerLength = 2 * (bottom - top + 1) + 2 * (right - left + 1) - 4;\r
            int netRotations = k % layerLength; // this is smart\r
\r
            for(int rotate = 0; rotate < netRotations; rotate++) {\r
                int topLeft = grid[top][left];\r
                for(int j = left; j < right; j++)\r
                    grid[top][j] = grid[top][j + 1];\r
                for(int j = top; j < bottom; j++)\r
                    grid[j][right] = grid[j + 1][right];\r
                for(int j = right; j > left; j--)\r
                    grid[bottom][j] = grid[bottom][j - 1];\r
                for(int j = bottom; j > top; j--)\r
                    grid[j][left] = grid[j - 1][left];\r
\r
                grid[top + 1][left] = topLeft;    \r
            }\r
            top++;\r
            bottom--;\r
            left++;\r
            right--;\r
        }\r
\r
        return grid;\r
    }\r
}\r
\r
```