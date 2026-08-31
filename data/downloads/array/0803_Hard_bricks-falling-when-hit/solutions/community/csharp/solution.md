# DFS

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/6060066/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/6060066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    private int rows;
    private int cols;
    private int[] dir = new int[]{0, 1, 0, -1, 0};
    private bool IsValid(int[][] grid, int r, int c) // check if it's out of grid size
    {
        if (r < 0 || c < 0 || r >= rows || c >= cols)
            return false;

        return true;
    }
    private int DFSStable(int[][] grid, int r, int c)
    {
        if (!IsValid(grid, r, c)|| grid[r][c] != 1) // if it's invalid or already visited
            return 0;

        grid[r][c] = 2;
        int cnt = 1;
        for (int p = 0; p < 4; p++)
        {
            cnt += DFSStable(grid, r + dir[p], c + dir[p+1]);
        }

        return cnt;
    }
    private bool IsConnected(int[][] grid, int r, int c)
    {
        if (r == 0)
            return true;

        for (int p = 0; p < 4; p++)
        {
            int newX = r + dir[p], newY = c + dir[p + 1];
            if (newX < 0 || newY < 0 || newX >= rows || newY >= cols || grid[newX][newY] != 2)
                continue;

            return true;
        }

        return false;
    }

    public int[] HitBricks(int[][] grid, int[][] hits) {
        rows = grid.Length;
        cols = grid[0].Length;
        int len = hits.Length;
        if (rows == 0 || cols == 0 || len == 0)
            return new int[0];

        int[] res = Enumerable.Repeat(0, len).ToArray();
        foreach (int[] hit in hits)
        {
            grid[hit[0]][hit[1]]--; // if original value is 1, it changes to 0, else change to -1;
        }

        for (int j = 0; j < cols; j++)
        {
            DFSStable(grid, 0, j);
        }

        for (int i = len - 1; i >= 0; i--)
        {
            int[] hit = hits[i];
            int x = hit[0], y = hit[1];
            grid[x][y]++; // reversing the change previously

            if (grid[x][y] == 1 && IsConnected(grid, x, y))
                res[i] = DFSStable(grid, x, y)-1; // connected 1's - current hit 1;
        }

        return res;
    }
}
```