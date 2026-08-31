# Simple java code 1 ms beats 100 %

**Author:** Arobh
**Votes:** 3
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/5140012/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/5140012/)

---


# Complexity
![image.png](./images/0.png)

# Code
```
class Solution {
    public int surfaceArea(int[][] grid) {
        int result = 0;
        for (int i = 0; i < grid.length; i++)    for (int j = 0; j < grid[0].length; j++)    result += getArea(grid, i, j);
        return result;
    }
    private int getArea(int[][] grid, int i, int j) {
        int towerHeight = grid[i][j];
        if (towerHeight == 0)    return 0;
        int area = 2 + (towerHeight * 4);
        if (i > 0)    area -= Math.min(towerHeight, grid[i - 1][j]);
        if (i < grid.length - 1)    area -= Math.min(towerHeight, grid[i + 1][j]);
        if (j > 0)    area -= Math.min(towerHeight, grid[i][j - 1]);
        if (j < grid[0].length - 1)    area -= Math.min(towerHeight, grid[i][j + 1]);
        return area;
    }
}
```