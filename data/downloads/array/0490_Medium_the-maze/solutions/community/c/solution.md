# [C++] DFS + Backtracking

**Author:** theGateway
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-maze/solutions/2225856/](https://leetcode.com/problems/the-maze/solutions/2225856/)

---

```
class Solution {
public:
    bool hasPath(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        return helperDfs(maze, start[0], start[1], destination[0], destination[1]);
    }
    
private:
    int directions[4][2] = {{0,1}, {1,0}, {-1,0}, {0,-1}};
    
    bool helperDfs(vector<vector<int>>& maze, int row, int col, int goalRow, int goalCol){
        int m = maze.size(), n = maze[0].size();
        
        if(row == goalRow && col == goalCol) return true;
                
        //Mark visited - Shouldn't be done with marking grid[row][col] = 1, as 1 is wall
        maze[row][col] = 2;
        
        //Search 4 directions
        for(int i=0; i<4; i++){
            int nr = row, nc = col;
            
            //Add next coordinates while checking while condition so that while loop breaks at valid nr, nc
            while(isValid(nr+directions[i][0], nc+directions[i][1], m, n, maze)){
                nr += directions[i][0];
                nc += directions[i][1];
            }
            if(maze[nr][nc] != 2 && helperDfs(maze, nr, nc, goalRow, goalCol)) return true;
        }
        
        //Can't go anywhere
        return false;
    }
    
    bool isValid(int row, int col, int totalRows, int totalCols, vector<vector<int>>& maze){
        if(row < 0 || col < 0 || row >= totalRows || col >= totalCols || maze[row][col] == 1) return false;
        return true;
    }
};
```