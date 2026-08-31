# [Java] - DFS, Easy to understand!

**Author:** Makubex74
**Votes:** 48
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/284935/](https://leetcode.com/problems/coloring-a-border/solutions/284935/)

---

OLD SOLUTION

The primary intuition is to do a DFS from the starting cell and find all the cells of the oldColor that needs to be changed. We mark these cells with a negative value of the oldColor. Once this is done, we need to find out which among those cells lies interior and which lies exterior. Interior cells have all 4 neighboring cells(top, bottom, left and right) to have either the oldColor value or -oldColor value. Make these interior cells positive again. Once we have processed this for all necessary nodes from the starting cell, we will get a grid containing negative cells that denote the boundary. We need to sweep through the entire grid and change these negative values to the new color.

* Check for existence of null or empty grid and return null if so.
* Store the color of starting cell grid[r0][c0] in oldColor.
* Initiate a DFS from starting cell.
* Check if the current cell lies out of bounds off the grid or if current cell does not have the same color as starting cell and return if so.
* Otherwise, change the current cell's color to a negative value for us to remember that we have processed this cell.
* Do a DFS for all neighboring points that are up, down, left and right from current cell.
* Once DFS returns back for the current cell after processing all directions from it, change the current cell's color back to positive value if you find that the current cell lies within adjacent cells top, bottom, left and right with the same value.
* Once the entire DFS has been processed, we now have a grid containing negative values representing the border which needs to be recolored to the new color.

```
class Solution {
    public int[][] colorBorder(int[][] grid, int r0, int c0, int color) {
        if(grid == null || grid.length == 0)
            return null;
        int oldColor = grid[r0][c0];
        dfs(grid, r0, c0, oldColor);
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                if(grid[i][j] < 0)
                    grid[i][j] = color;
            }
        }
        return grid;
    }
    public void dfs(int[][] grid, int i, int j, int oldColor) {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != oldColor) 
            return;
        grid[i][j] = -oldColor;
        dfs(grid, i+1, j, oldColor);
        dfs(grid, i-1, j, oldColor);
        dfs(grid, i, j+1, oldColor);
        dfs(grid, i, j-1, oldColor);
        if(i > 0 && j > 0 && i < grid.length-1 && j < grid[0].length-1
           && oldColor == Math.abs(grid[i+1][j])
           && oldColor == Math.abs(grid[i-1][j])
           && oldColor == Math.abs(grid[i][j+1])
           && oldColor == Math.abs(grid[i][j-1]))
            grid[i][j] = oldColor;
    }
}
```

UPDATED - There was a test case added recently that makes the above solution timeout (especially if Leetcode has restricted the upper bound runtime). While the above solution is elegant, if time is crucial, then we can expend more memory to declare a visited array.

In that case, please use the solution below, which more or less follows the same principle of marking nodes visited by using an external boolean array rather than marking the cell to have a negative value like in solution A. While this approach wastes a lot of memory, it would help save some time. You can ask your interviewer what they would prefer(i.e. save memory or make it faster), in order to use solution A or B.

---------------------
NEW SOLUTION

The primary intuition is to do a DFS from the starting cell and find all the cells of the oldColor that needs to be changed. We mark these cells as visited. Once this is done, we need to find out which among those cells lies interior and which lies exterior. Interior cells have all 4 neighboring cells(top, bottom, left and right) to have the oldColor value. 

* Check for existence of null or empty grid and return null if so.
* Initiate a DFS from starting cell.
* Check if the current cell lies out of bounds off the grid or if current cell does not have the same color as starting cell and return if so.
* Otherwise, mark the current cell as visited for us to remember that we have processed this cell.. 
* Declare a boolean flag to check if the current cell can be colored (i.e. to determine whether it belongs to the border in which case it should be colored or if it is just an interior node that shouldn't be colored)
* Do a DFS for all neighboring points that are up, down, left and right from current cell.
* Once DFS returns back for the current cell after processing all directions from it, change the current cell's color if you find that the current cell belongs to the border.

```
class Solution {
    public int[][] colorBorder(int[][] grid, int r0, int c0, int color) {
        if(grid == null || grid.length == 0)
            return null;
        boolean[][] visited = new boolean[grid.length][grid[0].length];
        dfs(grid, visited, r0, c0, grid[r0][c0], color);
        return grid;
    }
    public void dfs(int[][] grid, boolean[][] visited, int i, int j, int oldColor, int newColor) {
        if (i > grid.length - 1 || i < 0 || j > grid[0].length - 1 || j < 0 || grid[i][j] != oldColor || visited[i][j])
            return;
        visited[i][j] = true;
        boolean border = false;
        if(i == 0 || j == 0 || j == grid[0].length - 1 || i == grid.length - 1 || grid[i+1][j] != oldColor || grid[i-1][j] != oldColor || grid[i][j-1] != oldColor || grid[i][j+1] != oldColor)
            border = true;
        dfs(grid, visited, i+1, j, oldColor, newColor);
        dfs(grid, visited, i-1, j, oldColor, newColor);
        dfs(grid, visited, i, j+1, oldColor, newColor);
        dfs(grid, visited, i, j-1, oldColor, newColor);
        if(border) 
            grid[i][j] = newColor;            
    }
}
```

