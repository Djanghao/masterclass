# Beginner Friendly | C++ | DFS | 16ms | 78.22%

**Author:** motasimmakki
**Votes:** 9
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/1372161/](https://leetcode.com/problems/coloring-a-border/solutions/1372161/)

---

* Easy to understand? must upvote! \uD83D\uDE42
```
class Solution {
public:
    bool isVisited[51][51];
    vector<vector<int>> result;
    int ROW, COL, COLOR;
    
    bool isValid(vector<vector<int>>& grid, int i, int j){
        if((i>=0 and i<ROW) and (j>=0 and j<COL) and (grid[i][j] == COLOR) and (!isVisited[i][j]))
            return true;
        return false;
    }
    
    bool isBorder(vector<vector<int>>& grid, int i, int j){
        if(i == 0 || i == ROW-1 || j == 0 || j == COL-1)
            return true;
        if(grid[i][j+1] != COLOR || grid[i][j-1] != COLOR || grid[i+1][j] != COLOR || grid[i-1][j] != COLOR)
            return true;
        return false;
    }
    
    void DFS(vector<vector<int>>& grid, int i, int j, int color){
        isVisited[i][j] = true;
        if(isBorder(grid, i, j))
            result[i][j] = color;
        if(isValid(grid, i, j+1)){
            DFS(grid, i, j+1, color);
        }
        if(isValid(grid, i, j-1)){
            DFS(grid, i, j-1, color);
        }
        if(isValid(grid, i+1, j)){
            DFS(grid, i+1, j, color);
        }
        if(isValid(grid, i-1, j)){
            DFS(grid, i-1, j, color);
        }
    }
    
    vector<vector<int>> colorBorder(vector<vector<int>>& grid, int r0, int c0, int color) {
        memset(isVisited, false, sizeof isVisited);
        ROW = grid.size(); COL = grid[0].size(); COLOR = grid[r0][c0];
        result.resize(ROW, vector<int>(COL));
        for(int i = 0; i < grid.size(); i++){
            for(int j = 0; j < grid[0].size(); j++)
                result[i][j] = grid[i][j];
        }
        DFS(grid, r0, c0, color);
        return result;    
    }
};
```