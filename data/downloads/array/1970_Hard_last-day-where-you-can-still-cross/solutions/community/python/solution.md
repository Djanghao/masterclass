# DFS + BS | Video Solution | Java C++ Python

**Author:** jeevankumar159
**Votes:** 9
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698570/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698570/)

---

Why DFS?
DFS tries to reach the last row first and then try with other options unlike BFS reaching its neighbors first. 

The idea is given a water configurations i.e matrix with cells 0 and 1, can we travel from row 0 to last row. If Yes then on that day we are able to travel and our answer will be atleast this day or days further.

Binary Search: Say there are 8 days and we find out we are not able to travel on day 5. Can we safely eliminate day 6, 7,8. Yes. Similarly if we can travel on day 4, why check day 1,2,or 3.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7a-HxGyV0Yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    int row = 0;
    int col = 0;
    int [][]cells;
    public int[][] directions = new int[][]{{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    public int latestDayToCross(int row, int col, int[][] cells) {
        this.cells = cells;
        this.row = row;
        this.col = col;
        
        int left = 1, right = cells.length;
        int mid;
        while(left<right){
            mid = right - (right - left) / 2;
            if(canCross(mid)){
                left = mid;
            }else{
                right = mid-1;
            }
        }
        return left;
    }
    
    public boolean canCross(int day){
        int [][] grid = new int[row][col];
        for(int i = 0;i<day;i++){
            grid[cells[i][0] - 1][cells[i][1] - 1] = 1;
        }
        
        for(int i = 0;i<col;i++){
            if(grid[0][i]==0 && dfs(grid,0,i)){
                return true;
            }
        }
        return false;
    }
    
    public boolean dfs(int [][] grid, int r, int c){
        if(r<0 || r>=row || c<0 || c>=col || grid[r][c]!=0) return false;
        
        if(r == row-1) return true;
        grid[r][c] = -1;
        for(int [] direction: directions){
            int i = r + direction[0];
            int j = c + direction[1];
            if(dfs(grid,i,j)) return true;
        }
        return false;
    }
}
```

```
#include <vector>

class Solution {
    int row;
    int col;
    std::vector<std::vector<int>> cells;
    std::vector<std::vector<int>> directions;
    
public:
    Solution() {
        directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    }
    
    int latestDayToCross(int row, int col, std::vector<std::vector<int>>& cells) {
        this->row = row;
        this->col = col;
        this->cells = cells;
        
        int left = 1, right = cells.size();
        int mid;
        while (left < right) {
            mid = right - (right - left) / 2;
            if (canCross(mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    
    bool canCross(int day) {
        std::vector<std::vector<int>> grid(row, std::vector<int>(col, 0));
        for (int i = 0; i < day; i++) {
            grid[cells[i][0] - 1][cells[i][1] - 1] = 1;
        }
        
        for (int i = 0; i < col; i++) {
            if (grid[0][i] == 0 && dfs(grid, 0, i)) {
                return true;
            }
        }
        return false;
    }
    
    bool dfs(std::vector<std::vector<int>>& grid, int r, int c) {
        if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] != 0) {
            return false;
        }
        
        if (r == row - 1) {
            return true;
        }
        grid[r][c] = -1;
        for (const auto& direction : directions) {
            int i = r + direction[0];
            int j = c + direction[1];
            if (dfs(grid, i, j)) {
                return true;
            }
        }
        return false;
    }
};

```

```
class Solution:
    def __init__(self):
        self.row = 0
        self.col = 0
        self.cells = []
        self.directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    def latestDayToCross(self, row, col, cells):
        self.row = row
        self.col = col
        self.cells = cells
        
        left = 1
        right = len(cells)
        while left < right:
            mid = right - (right - left) // 2
            if self.canCross(mid):
                left = mid
            else:
                right = mid - 1
        return left
    
    def canCross(self, day):
        grid = [[0] * self.col for _ in range(self.row)]
        for i in range(day):
            grid[self.cells[i][0] - 1][self.cells[i][1] - 1] = 1
        
        for i in range(self.col):
            if grid[0][i] == 0 and self.dfs(grid, 0, i):
                return True
        return False
    
    def dfs(self, grid, r, c):
        if r < 0 or r >= self.row or c < 0 or c >= self.col or grid[r][c] != 0:
            return False
        
        if r == self.row - 1:
            return True
        grid[r][c] = -1
        for direction in self.directions:
            i = r + direction[0]
            j = c + direction[1]
            if self.dfs(grid, i, j):
                return True
        return False

```