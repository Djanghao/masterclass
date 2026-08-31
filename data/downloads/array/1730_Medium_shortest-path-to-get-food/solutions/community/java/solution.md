# [Java] Simple BFS Solution

**Author:** muhammad-bahaa
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/1215655/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/1215655/)

---

```
class Solution {
    int[][] directions = {{1,0},{-1,0},{0,1},{0,-1}};
    public int getFood(char[][] grid) {
        int n = grid.length, m = grid[0].length, steps = 0;
        boolean[][] seen = new boolean[n][m];
        Queue<int[]> q = new LinkedList();
        
        for(int i = 0; i < n; i++)
            for(int j = 0; j < m; j++)
                if(grid[i][j] == '*')
                    q.add(new int[]{i , j});
        
        while(!q.isEmpty()){
            int size = q.size();
            while(size-- > 0){
                int[] index = q.poll();
                int row = index[0], col = index[1];
                
                if(grid[row][col] == '#') return steps;
                
                for(int[] direction : directions){
                    int r = row + direction[0], c = col + direction[1];
                    if(r >= 0 && c >= 0 && r < n && c < m && grid[r][c] != 'X' && !seen[r][c]){
                         seen[r][c] = true;
                         q.add(new int[]{r , c});
                    }
                    
                } 
            }
            steps++;
        }
        return -1;
    }
}
```