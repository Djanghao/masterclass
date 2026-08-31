# C#, and TypeScript Solution 🔥🚀 with approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3391471/](https://leetcode.com/problems/number-of-enclaves/solutions/3391471/)

---

# \u2B06\uFE0FLike|\uD83C\uDFAFShare|\u2B50Favourite

# Code
```Csharp []
public class Solution 
{
    public int NumEnclaves(int[][] grid)
    {
        int m = grid.Length;
        int n = grid[0].Length;
        for (int i = 0; i < m; i++)
        {
            if (grid[i][0] == 1)
            {
                DFS(grid, i, 0);
            }

            if (grid[i][n - 1] == 1)
            {
                DFS(grid, i, n - 1);
            }
        }

        for (int i = 0; i < n; i++)
        {
            if (grid[0][i] == 1)
            {
                DFS(grid, 0, i);
            }

            if (grid[m - 1][i] == 1)
            {
                DFS(grid, m - 1, i);
            }
        }
        int count = 0;
        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 1)
                {
                    count++;
                }
            }
        }
        return count;
    }

    private void DFS(int[][] grid, int p1, int p2)
    {
        if (p1 < 0 || p1 >= grid.Length || p2 < 0 || p2 >= grid[0].Length || grid[p1][p2] == 0)
        {
            return;
        }
        grid[p1][p2] = 0;
        DFS(grid, p1 + 1, p2);
        DFS(grid, p1 - 1, p2);
        DFS(grid, p1, p2 + 1);
        DFS(grid, p1, p2 - 1);
    }
}
```
```Typescript []
function numEnclaves(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        if (grid[i][0] == 1) {
            DFS(grid, i, 0);
        }

        if (grid[i][n - 1] == 1) {
            DFS(grid, i, n - 1);
        }
    }

    for (let i = 0; i < n; i++) {
        if (grid[0][i] == 1) {
            DFS(grid, 0, i);
        }

        if (grid[m - 1][i] == 1) {
            DFS(grid, m - 1, i);
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                count++;
            }
        }
    }
    return count;
};

function DFS(grid: number[][], p1: number, p2: number) {
    if (p1 < 0 || p1 >= grid.length || p2 < 0 || p2 >= grid[0].length || grid[p1][p2] == 0) {
        return;
    }
    grid[p1][p2] = 0;
    DFS(grid, p1 + 1, p2);
    DFS(grid, p1 - 1, p2);
    DFS(grid, p1, p2 + 1);
    DFS(grid, p1, p2 - 1);
}
```
# Approach
1. Find the number of rows and columns in the grid.
2. Traverse the first and last row and call DFS on the 1's.
3. Traverse the first and last column and call DFS on the 1's.
4. Traverse the grid and count the number of 1's.
5. Return the count.

# Runtime & Memory
![image.png](./images/0.png)

![image.png](./images/1.png)


# Complexity
- Time complexity: **O(m*n)**

- Space complexity: **O(m*n)**

