# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/1252829/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/1252829/)

---

```
public class Solution 
{
    public int GetFood(char[][] grid) 
    {
        Queue<(int x,int y)> qu = new Queue<(int x,int y)>();
        
        for(int i=0; i<grid.Length; i++)
        {
            for(int j=0; j<grid[0].Length; j++)
            {
                if(grid[i][j]=='*')
                {
                    qu.Enqueue((i,j));
                    grid[i][j]='-';
                }
            }
        }
        
        int dis = 0;
        int[] dx = {-1,1,0,0};
        int[] dy = {0,0,-1,1};
        
        while(qu.Count>0)
        {
            int cnt = qu.Count;
            dis++;

            for(int i=0; i<cnt; i++)
            {
                var cur = qu.Dequeue();
                
                for(int d=0; d<4; d++)
                {
                    int m = cur.x + dx[d];
                    int n = cur.y + dy[d];
                    
                    if(m<0 || m>=grid.Length || n<0 || n>=grid[0].Length || grid[m][n]=='X' || grid[m][n]=='-')
                        continue;
                    
                    if(grid[m][n]=='#')
                        return dis;
                    
                    grid[m][n]='-';
                    qu.Enqueue((m,n));
                }
            }
        }
        
        return -1;
    }
}
```