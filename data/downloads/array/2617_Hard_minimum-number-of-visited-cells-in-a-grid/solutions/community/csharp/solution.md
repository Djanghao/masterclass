# C# BFS with next unvisited index for rows and columns

**Author:** justunderdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3396005/](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3396005/)

---

# Complexity

- Time complexity: $$O(mn)$$

- Space complexity: $$O(mn)$$

# Code
```
public class Solution
{
    public int MinimumVisitedCells(int[][] grid)
    {
        int m = grid.Length;
        int n = grid[0].Length;
        
        var queue = new Queue<(int, int)>();
        
        int[] rows = new int[m];
        int[] cols = new int[n];
        
        queue.Enqueue((0, 0));
        rows[0] = 1;
        cols[0] = 1;
        
        int d = 1;
        
        int count;
        (int, int) tuple;
        int x;
        int y;
        while (queue.Count > 0)
        {
            count = queue.Count;
            for (int i = 0; i < count; i++)
            {
                tuple = queue.Dequeue();
                x = tuple.Item1;
                y = tuple.Item2;
                
                if (x == m - 1 && y == n - 1)
                {
                    return d;
                }
                
                for (int j = Math.Max(y + 1, rows[x]); j <= Math.Min(n - 1, grid[x][y] + y); j++)
                {
                    queue.Enqueue((x, j));
                    rows[x] = j + 1;
                }
                        
                for (int j = Math.Max(x + 1, cols[y]); j <= Math.Min(m - 1, grid[x][y] + x); j++)
                {
                    queue.Enqueue((j, y));
                    cols[y] = j + 1;
                }
            }
            
            d++;
        }
        
        return -1;
    }
}
```