# [Java] BFS (17ms), Explained with comments

**Author:** Lucas_zhc
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/431850/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/431850/)

---

Two things need to pay attention:
* While trying to recorded to **visited position of Box**, we need to include an additional dimension to record which direction the Player pushed the box from. For example, there are 4 previous positions that the Box can arrive position (x, y). We have to treat those 4 states separately.
* While checking if the Player is able to reach the correct position to make a valid push, we need to **set the Box position as an obstacle(#)** since the Player cannot walk pass Box. Also, we need to keep track of **the previous position of the Player** after making the push.

I have included comments in my code. Hope this helps.

```
class Solution {
    private char[][] G;
    private int rows;
    private int cols;
    private int[] dir = new int[]{-1,0,1,0,-1};
    public int minPushBox(char[][] grid) {
        // Sanity check
        if(grid == null || grid.length == 0 || grid[0].length == 0)     
            return-1;
        
        rows = grid.length;
        cols = grid[0].length;
        G = grid;
        
        // Find the location of the Target, the Box and the Player.
        int[] tLoc = new int[2];
        int[] pLoc = new int[2];
        int[] bLoc = new int[2];
        for(int r = 0; r < rows; r++) {
            for(int c = 0; c < cols; c++) {
                if(G[r][c] == 'S')
                    pLoc = new int[]{r,c};
                
                if(G[r][c] == 'T') 
                    tLoc = new int[]{r,c};
                
                if(G[r][c] == 'B')  
                    bLoc = new int[]{r,c};
                
                // Set those location to be Floor so we can BFS easier
                if(G[r][c] != '#')  
                    G[r][c] = '.';
            }
        }
        
        // BFS on Box
        return bfs(pLoc, bLoc, tLoc);
    }
    
    // BFS for Box
    private int bfs(int[] p, int[] b, int[] t) {
        Queue<int[]> queue = new LinkedList<>();
        // Keep a record of the Player position along with the Box positon
        int[] L = new int[]{b[0],b[1],p[0],p[1]};
        
        // An extra dimension to keep track of where the Box is pushed from
        boolean[][][] visited = new boolean[rows][cols][4];
        queue.offer(L);
        int step = 0;
        
        // Standard BFS
        while(!queue.isEmpty()) {
            int len = queue.size();
            while(len > 0) {
                int[] loc = queue.poll();
                // Mark the current Box position as an obstacle
                G[loc[0]][loc[1]] = '#';
                
                // Use directional array to check 4 directions
                for(int i = 0; i < 4; i++) {
                    int deltaR = dir[i];
                    int deltaC = dir[i+1];
                    int newR = loc[0] + deltaR;
                    int newC = loc[1] + deltaC;
                    
                    // If the new Box position is in bound 
                    // && the Play can reach that position
                    // && that position is a Floor
                    // && that position is visited with the current push direction "i"
                    if(inBound(newR,newC) 
                            && reachable(loc[2],loc[3],loc[0]-deltaR,loc[1]-deltaC)
                            && G[newR][newC] != '#' 
                            && !visited[newR][newC][i]) {
                        
                        // If the Target is reached
                        if(t[0] == newR && t[1] == newC)  return step+1;
                        
                        // Put the new Box position into the queue along with the Player position
                        queue.offer(new int[]{newR, newC,loc[0],loc[1]});
                        visited[newR][newC][i] = true;
                    }
                }
                
                // Mark the Box position back to Floor
                G[loc[0]][loc[1]] = '.';
                
                len--;
            }
            step++;
        }
        
        // If the program reaches here, it means no solution.
        return -1;
    }
    
    // BFS for Plahyer
    // This is just standard BFS, return true if Player can reach that position
    private boolean reachable(int pR, int pC, int r, int c) {
        // If the Play is on that position to start with, return true
        if(pR == r && pC == c)  
            return true;
        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visited = new boolean[rows][cols];
        queue.offer(new int[]{pR, pC});
        
        while(!queue.isEmpty()) {
            int len = queue.size();
            while(len > 0) {
                int[] loc = queue.poll();
                if(!visited[loc[0]][loc[1]]) {
                    visited[loc[0]][loc[1]] = true;
                    for(int i = 0; i < 4; i++) {
                        int newR = loc[0] + dir[i];
                        int newC = loc[1] + dir[i+1];
                        if(inBound(newR,newC) 
                           && G[newR][newC] != '#' 
                           && !visited[newR][newC]) {
                            if(r == newR && c == newC)  return true;
                            queue.offer(new int[]{newR, newC});
                        }
                    }
                }
                len--;
            }
        }
        return false;
    }
    
    // Check if the coordinate is out of bound
    private boolean inBound(int r, int c) {
        return r >= 0 && c >= 0 && r < rows && c < cols;
    }
}
```

Time complexity: O((nm)^2)
In worse case, the Box has to traverse through the entire matrix which has nm vertices. We also need to do the same thing for the Play with each vertice. That makes the total iteration to be (nm)^2. But, in practice, it will be way lower than that.

Space complexity: O(nm)
Memory needed for Queue in BFS.
