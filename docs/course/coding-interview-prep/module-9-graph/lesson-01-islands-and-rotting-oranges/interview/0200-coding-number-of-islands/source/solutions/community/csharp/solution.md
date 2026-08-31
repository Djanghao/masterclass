# BFS using queue C#

**Author:** AfshinNeo
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/2947375/](https://leetcode.com/problems/number-of-islands/solutions/2947375/)

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
```
public class Solution {
    public int NumIslands(char[][] grid) 
    {
        Queue<(int, int)> queue = new();
        (int, int)[] directions = new[] {(-1, 0), (1, 0), (0, -1), (0, 1)};
        
        int result = 0;
        
        for (int i = 0; i < grid.Length ; i++)
            for (int j = 0; j < grid[i].Length ; j++)
            {
                if (grid[i][j] == '1')
                {                
                    result++;
                    queue.Enqueue((i, j));
                    while (queue.Count > 0)
                    {
                        var p = queue.Dequeue();
                        foreach (var dir in directions)
                        {
                            int r = p.Item1 + dir.Item1;
                            int c = p.Item2 + dir.Item2;
                            
                            if(r >=0 && r < grid.Length &&
                               c >= 0 && c < grid[r].Length &&
                               grid[r][c] == '1')
                            {
                                grid[r][c] = '2';
                                queue.Enqueue((r, c));
                            }
                        }
                    }
                }
            }
        
        return result;
    }
}
```