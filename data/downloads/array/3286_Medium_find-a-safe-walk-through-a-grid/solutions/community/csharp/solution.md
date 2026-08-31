# Simple BFS | Standard BFS template | Beginner Friendly

**Author:** vivek1311
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/6065992/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/6065992/)

---

# Intuition
We have to reach at bottom of grid with health >= 1.

# Approach
First thing that came into my mind is BFS, same thought as finding the shortest path.
    - key point to note here is the visited array depends on health on three things. row, colm, & health.
    -  Which means, reaching to cell (x, y) with health k is diffrent from reaching to same cell (x, y) with health k1.
    - So will keep health also in our visited array. 

# Complexity
- Time complexity:
O(m * n * h);

- Space complexity:
O(m * n * h);

# Code
```csharp []
public class Solution 
{
    int[] dx = {0, 1, 0, -1};
    int[] dy = {1, 0, -1, 0,};
    public bool FindSafeWalk(IList<IList<int>> grid, int health) 
    {
        /*
            cell state is depdendent on health
            so visiting a cell with health = a, is diffrent from visiting a cell with health = b
        */
        int m = grid.Count;
        int n = grid[0].Count;    

        if (grid[0][0] == 1)
            health -= 1;
        if (health < 0)
            return false;
        //why health + 1 => we are counting health from 1
        var visited = new bool[m , n, health + 1]; 
        var q = new Queue<(int r, int c, int h)>();
        q.Enqueue((0, 0, health));
        visited[0, 0, health] = true;

        while (q.Count > 0) 
        {
            (int r, int c, int h) = q.Dequeue();
            if (r == m - 1 && c == n - 1)
                return true;
            for (int i = 0; i < 4; i++) 
            {
                int x = r + dx[i];
                int y = c + dy[i];
                if (x >= 0 && y >= 0 && x < m && y < n)
                {
                    int h1 = h - grid[x][y];
                    if (h1 >= 1 && !visited[x, y, h1]) 
                    {
                        q.Enqueue((x, y, h1));
                        visited[x, y, h1] = true;
                    }
                }
            }
        }
        return false;
    }
}
```