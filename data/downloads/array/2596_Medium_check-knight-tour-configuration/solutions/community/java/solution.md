# Clean || Short || Recursion || Java

**Author:** HimanshuBhoir
**Votes:** 24
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314147/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314147/)

---

```java []
class Solution {
    boolean dest = false;
    public boolean checkValidGrid(int[][] grid) {
        check(grid, 0, 0, -1);
        return dest;
    }
    void check(int[][] grid, int i, int j, int prev){
        if(i < 0 || j < 0 || i >= grid.length || j >= grid.length || grid[i][j] != prev+1)   return;
        if(grid[i][j] == grid.length*grid.length-1) dest = true;
        check(grid,i+2,j+1,grid[i][j]);
        check(grid,i+2,j-1,grid[i][j]);
        check(grid,i+1,j+2,grid[i][j]);
        check(grid,i+1,j-2,grid[i][j]);
        check(grid,i-2,j+1,grid[i][j]);
        check(grid,i-2,j-1,grid[i][j]);
        check(grid,i-1,j+2,grid[i][j]);
        check(grid,i-1,j-2,grid[i][j]);
    }
}
```