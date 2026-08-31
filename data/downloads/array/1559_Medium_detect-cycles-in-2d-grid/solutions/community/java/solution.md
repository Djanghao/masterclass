# JAVA | Simple DFS solution | 97% Runtime

**Author:** suraj008
**Votes:** 15
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/814850/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/814850/)

---

The logic here is to let recursion do its work, we maintain a visited array of integers and if during dfs you find an integer where the difference in count between `visited[i][j]` and `visited[previ][prevj]` is greater or equal to 3 of which `grid[i][j]` is of same `character`, there exists a loop.
The `previ` and `prevj` are the previous index of the recursion loop.

```
class Solution {
    int count = 0;
    public boolean dfs(char[][] grid, int i,int j,int[][] visited, int previ,int prevj, char c){
        
        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]!=c)
            return false;
       
        if(visited[i][j]-visited[previ][prevj]>=3)
            return true;

        if(visited[i][j]!=0)
            return false;
        
        visited[i][j]=count++;
        
        return dfs(grid,i+1,j,visited,i,j,c) || dfs(grid,i-1,j,visited,i,j,c) || dfs(grid,i,j+1,visited,i,j,c) || dfs(grid,i,j-1,visited,i,j,c);
    }
    public boolean containsCycle(char[][] grid) {
        
        int n = grid.length, m = grid[0].length;
        int[][]visited = new int[n][m];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(visited[i][j]==0 && dfs(grid,i,j,visited,i,j,grid[i][j]))
                    return true;
            }
        }
        return false;
    }
}
```