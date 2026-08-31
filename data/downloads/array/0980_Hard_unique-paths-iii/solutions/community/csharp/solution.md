# C# Java simplest clean solution DFS/Backtracking

**Author:** JohnRush
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/5052020/](https://leetcode.com/problems/unique-paths-iii/solutions/5052020/)

---

# Approach
1. Moving through the matrix. Counting the number of zeros and looking for the starting point.
2. Calling the dfs-backtracking method which will count the number of correct paths.

# Code
```C# []
public class Solution {
    public int UniquePathsIII(int[][] grid) {
        int startI = 0, startJ = 0, countZeroes = 0;

        for (int i = 0; i < grid.Length; i++)
        {
            for (int j = 0; j < grid[0].Length; j++)
            {
                if (grid[i][j] == 0)
                    countZeroes++;

                if (grid[i][j] == 1)
                {
                    startI = i;
                    startJ = j;
                }
            }
        }
        return Backtracking(grid, startI, startJ, countZeroes);
    }

    private int Backtracking(int[][] grid, int i, int j, int countZeroes)
    {
        if (i < 0 || j < 0 || i > grid.Length - 1 || j > grid[0].Length - 1 || grid[i][j] == -1)
            return 0;

        if (grid[i][j] == 2)
        {
            if (countZeroes == 0)
                return 1;
            else
                return 0;
        }

        if (grid[i][j] == 0)
            countZeroes--;

        grid[i][j] = -1;

        int paths = Backtracking(grid, i, j + 1, countZeroes)
            + Backtracking(grid, i + 1, j, countZeroes)
            + Backtracking(grid, i, j - 1, countZeroes)
            + Backtracking(grid, i - 1, j, countZeroes);

        grid[i][j] = 0;

        return paths;
    }
}
```
```Java []
class Solution {
    public int uniquePathsIII(int[][] grid) {
        int startI = 0, startJ = 0, countZeroes = 0;

        for (int i = 0; i < grid.length; i++)
        {
            for (int j = 0; j < grid[0].length; j++)
            {
                if (grid[i][j] == 0)
                {
                    countZeroes++;
                }

                if (grid[i][j] == 1)
                {
                    startI = i; startJ = j;
                }
            }
        }
        return backtracking(grid, startI, startJ, countZeroes);
    }
    private int backtracking(int[][] grid, int i, int j, int countZeroes)
    {
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == -1)
            return 0;

        if (grid[i][j] == 2)
        {
            if (countZeroes == 0)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }

        if (grid[i][j] == 0)
        {
            countZeroes--;
        }

        grid[i][j] = -1;

        int paths = backtracking(grid, i, j + 1, countZeroes)
            + backtracking(grid, i + 1, j, countZeroes)
            + backtracking(grid, i, j - 1, countZeroes)
            + backtracking(grid, i - 1, j, countZeroes);

        grid[i][j] = 0;

        return paths;
    }
}
```