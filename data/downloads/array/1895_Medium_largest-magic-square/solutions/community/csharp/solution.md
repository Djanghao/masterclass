# c# solution + description

**Author:** abettertomorrow
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/3275506/](https://leetcode.com/problems/largest-magic-square/solutions/3275506/)

---

We can approach this problem using the following steps:

1. We need to find the maximum possible size of a magic square, which is Math.min(m, n). This is because the side length of the magic square cannot be greater than the width or height of the grid.

2. We then loop over all side lengths from Math.min(m, n) to 2, and find the largest side length such that there exists at least one magic square with the side length. Once such a side length is found, we return the side length. Otherwise, we return 1.

3. To find if a magic square of a given side length exists within the grid, we need to check all possible starting positions for the magic square. We do this by looping over all rows and columns where a magic square of the given side length can fit.

4. For each starting position, we check if the subgrid of the given side length is a magic square. To do this, we calculate the row sums, column sums, and diagonal sums of the subgrid, and check if they are all equal. If they are, we return true.

5. If we have checked all possible starting positions and none of them are magic squares, we return false.

```
public class Solution {
    public int LargestMagicSquare(int[][] grid) 
    {
        int m = grid.Length, n = grid[0].Length;

        for (int side = Math.Min(m, n); side > 1; side--) 
            if (ExistMagicSquare(grid, m, n, side)) return side;

        return 1;
    }
    
    public bool ExistMagicSquare(int[][] grid, int m, int n, int side) 
    {
        int maxRow = m - side, maxColumn = n - side;

        for (int i = 0; i <= maxRow; i++) 
            for (int j = 0; j <= maxColumn; j++) 
                if (IsMagicSquare(grid, i, j, side)) return true;

        return false;
    }
    
    public bool IsMagicSquare(int[][] grid, int startRow, int startColumn, int side) {
        HashSet<int> set = new HashSet<int>();
        int[] rowSums = new int[side];
        int[] columnSums = new int[side];
        int diagonal1 = 0, diagonal2 = 0;

        for (int i = 0; i < side; i++) 
        {
            for (int j = 0; j < side; j++) 
            {
                rowSums[i] += grid[startRow + i][startColumn + j];
                columnSums[j] += grid[startRow + i][startColumn + j];
                if (i == j) diagonal1 += grid[startRow + i][startColumn + j];
                if (i + j == side - 1) diagonal2 += grid[startRow + i][startColumn + j];
            }
        }

        for (int i = 0; i < side; i++) 
        {
            set.Add(rowSums[i]);
            set.Add(columnSums[i]);
        }
        
        set.Add(diagonal1);
        set.Add(diagonal2);
        return set.Count == 1;
    }
}
```