# C# || Simple DFS with Memoization

**Author:** adithyakk
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652638/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652638/)

---

# Code
```
public class Solution {
    public int CountPaths(int[][] grid) {
        int result = 0;
        cache = new int[grid.Length][];
        for(int i=0;i<grid.Length;i++)
            cache[i] = new int[grid[0].Length];
        for(int i=0;i<grid.Length;i++)
        {
            for(int j=0;j<grid[0].Length;j++)
                result = (result + DFS(i,j,grid)) % MOD;
        }
        return result;
    }

    private int DFS(int i, int j, int[][] grid)
    {
        if(cache[i][j] != 0)
            return cache[i][j];
        
        int count = 1;
        foreach(var d in directions)
        {
            int p = i + d.x;
            int q = j + d.y;
            if(p >=0 && p < grid.Length && q >=0 && q < grid[0].Length && grid[p][q] < grid[i][j])
                count = (count + DFS(p,q,grid)) % MOD;
        }
        return cache[i][j] = count;
    }
    
    private int[][] cache;
    private List<(int x,int y)> directions = new(){
        (0,1),
        (1,0),
        (0,-1),
        (-1,0)
    };
    
    private int MOD = 1_000_000_007;
}
```