# DFS, very quick, C# flip

**Author:** bigeugene
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5080964/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/5080964/)

---

![image.png](./images/0.png)


# Intuition
Find a path and disconnect it. Try to find another path. If not found, then it is disconnectable by one of the previous points, otherwise we would be able to find another path.

# Approach
Use DFS to get to the last point (bottom right corner). If we got to it, return true. On the way back set all nodes to false.

# Optimization
Please note we are disconnecting all other nodes, found or not, in order not to try them again next time. This is done on purpose to improve performance.

Also, we are destroying the original array. Again, to achieve maximum performance and beat all other solutions :)

# Complexity
- Time complexity:
$$O(n * m)$$ 
Out of both recursive calls, we get to each node only once. Not counting the immediate return if zero.

- Space complexity:
$$O(n * m)$$ if the array needs to be copied. Otherwise $$O(1)$$ 

# Code
```
public class Solution {
    public bool IsPossibleToCutPath(int[][] grid) 
    {
        if (grid == null || grid.Length < 1 || grid[0].Length < 1) return false;

        int m = grid.Length, n = grid[0].Length;

        if (m == 1 || n == 1) // If single line, check if line longer than 2, confusing, I know
            return n+m > 3; // Another optimization for certain cases.

        // If found path, try again
        if (flipPath(grid, 0, 0, m, n))
            return !flipPath(grid, 0, 0, m, n);
        
        return true; // not found, already disconnected
    }

    bool flipPath(int[][] grid, int i, int j, int m, int n)
    {
        if (i >= m || j >= n || grid[i][j] == 0) //dead end
            return false;
        
        if(i==m-1 && j==n-1) //reached the end, yeah
            return true;
        
        if (i!=0 || j!=0) // we should not be disconnecting first cell
            grid[i][j] = 0;

        return flipPath(grid, i+1, j, m, n) || flipPath(grid, i, j+1, m, n);
    }
}
```