# C++ Simple and Clean DFS Solution, Explained, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 178
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/1553805/](https://leetcode.com/problems/unique-paths-iii/solutions/1553805/)

---

**Explanation:**
First step, we need to know where the starting point is. We also want to know the number of empty cells.
So we iterate through the grid, count empty cells and save the starting point - `start_x` and `start_y`.
Now, we do classic DFS, marking the visited cells with -1 and counting the cells we passed.
If we reached the ending point and we passed `empty` number of cells - this means we passed by every non-obstacle cell.
```
class Solution {
public:
    int res = 0, empty = 1;
    void dfs(vector<vector<int>>& grid, int x, int y, int count) {
        if (x < 0 || x >= grid.size() || y < 0 || y >= grid[0].size() || grid[x][y] == -1) return;
        
        if (grid[x][y] == 2) {
            if(empty == count) res++; 
            return;
        }
        
        grid[x][y] = -1;
        
        dfs(grid, x+1, y, count+1);
        dfs(grid, x-1, y, count+1);
        dfs(grid, x, y+1, count+1);
        dfs(grid, x, y-1, count+1);
        
        grid[x][y] = 0;
        
    }
    
    int uniquePathsIII(vector<vector<int>>& grid) {
        int start_x, start_y;
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0; j < grid[0].size(); j++) {
                if (grid[i][j] == 1) start_x = i, start_y = j;
                else if (grid[i][j] == 0) empty++;
            }
        }
        
        dfs(grid, start_x, start_y, 0);
        return res;
    }
};
```
**Like it? please upvote!**