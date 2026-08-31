# Simple BFS Solution

**Author:** VasilKostov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5857869/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/5857869/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  $$O(m $$ x $$ n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m $$ x $$ n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution 
{
    public int FindMaxFish(int[][] grid) 
    {
        var res = 0;
        var visited = new HashSet<(int,int)>();
        for(int i = 0; i< grid.Length;i++)
        {
            for(int j = 0; j < grid[i].Length;j++)
            {
                if(visited.Contains((i,j)) || grid[i][j] == 0)
                    continue;

                var c = 0;
                var q = new Queue<(int,int)>();

                q.Enqueue((i,j));

                while(q.Any())
                {
                    var (x,y) = q.Dequeue();

                    if(grid[x][y] == 0 || !visited.Add((x,y)))
                        continue;
                    
                    c+= grid[x][y];

                    if(x > 0 && x < grid.Length)
                        q.Enqueue((x-1,y));
                    if(x >= 0 && x < grid.Length-1)
                        q.Enqueue((x+1,y));
                    if(y > 0 && y < grid[x].Length)
                        q.Enqueue((x,y-1));
                    if(y >= 0 && y < grid[x].Length-1)
                        q.Enqueue((x,y+1));
                }

                if(c > res)
                    res = c;
            }
        }

        return res;
    }
}
```