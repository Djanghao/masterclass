# Simple & Easy to understand solution and intuitive solution

**Author:** amitcode563
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5993115/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/5993115/)

---

# Intuition
Find the minimum distance required to each building from every zero.
# Approach
Go through each zero and find the distance it take to reach all building and update the minimum till now.
While doing BFS at each level keep incrementing the distance.
whenever we find a one then add the distance cost.
At the end ensure if all one's are visited.
# Complexity
- Time complexity: m^2 * n^2

- Space complexity: m*n
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int ShortestDistance(int[][] grid) {
        (var onesList, var zeroesList) = GetMaps(grid);
        int min = Int32.MaxValue;
        foreach((int xu, int yu) in zeroesList){
            var d = GetDistance((xu,yu), grid.Length, grid[0].Length,grid);
            if(d!= -1)
                min = Math.Min(min,d);
        }

        
        return min == Int32.MaxValue? -1:min;
    }

    private int GetDistance((int x, int y) u, int m, int n, int[][] grid){
        int distance = 0;
        int count = 0;
        var q = new Queue<(int x,int y)>();
        q.Enqueue((u.x,u.y));
        
        bool[,] isVisited = new bool[m,n];
        isVisited[u.x,u.y]= true;

        while(q.Count != 0){
            distance++;
            int size = q.Count;
            for(int i = 0; i < size; i++){
                (int x, int y) = q.Dequeue();

                foreach((int tx,int ty) in GetDirections(x,y,m,n,grid)){
                    if(!isVisited[tx,ty]  && grid[tx][ty]==1)
                       count += distance; 
                    
                    if (!isVisited[tx, ty] && grid[tx][ty] == 0)
                        q.Enqueue((tx,ty));
                    
                    isVisited[tx,ty] = true;
                }
            }
        }
        for(int i = 0; i<grid.Length; i++){
            for(int j = 0; j<grid[0].Length; j++){
                if(grid[i][j] == 1 && !isVisited[i,j])
                    return -1;
            }
        }
        return count;
    }

    private List<(int x, int y)> GetDirections(int x, int y, int m, int n, int[][] grid){
        var d = new List<(int x, int y)>();
        if(x+1<m && grid[x+1][y] != 2)
            d.Add((x+1,y));
        if(y+1<n && grid[x][y+1] != 2)
            d.Add((x,y+1));
        if(x-1>-1 && grid[x-1][y] != 2)
            d.Add((x-1,y));
        if(y-1>-1 && grid[x][y-1] != 2)
            d.Add((x,y-1));
        return d;
    }
}
```