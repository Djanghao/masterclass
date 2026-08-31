# C# Solution with memo

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3900987/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3900987/)

---


# Code
```
public class Solution {
    private int rows;
    private int cols;
    private bool?[, , ] memo; 

    public bool IsThereAPath(int[][] grid) {
        rows = grid.Length;
        cols = grid[0].Length;
        memo = new bool?[rows, cols, 2 * (rows + cols)];
   
        return IsThereAPath(grid, 0, 0, 0);
    }

    private bool IsThereAPath(int[][] grid, int row, int col, int diff) {
        if(row >= rows || col >= cols)  return false;

        diff += grid[row][col] == 0 ? 1 : -1;

        if(memo[row, col, diff + rows + cols] != null) return memo[row, col, diff + rows + cols].Value; 
        if(row == rows - 1 && col == cols - 1 && diff == 0)  {
            memo[row, col, diff + rows + cols] = true;
            return true;
        }    
   
        memo[row, col, diff + rows + cols]  = IsThereAPath(grid, row + 1, col, diff) || IsThereAPath(grid, row, col + 1, diff);

        return memo[row, col, diff + rows + cols].Value;
    }
}
```