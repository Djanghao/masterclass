# Fastest (100%) || Easy to Understand || Clean & Concise

**Author:** gameboey
**Votes:** 116
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154494/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154494/)

---

![Screenshot 2024-05-14 073252.png](./images/0.png)

# Intuition
We perform a depth-first search from each cell containing gold, then explore all valid paths and backtrack to find the maximum gold that can be collected without revisiting cells.

# Approach
Here's how the approach works:

1. We Iterate through the grid to find cells with gold.

2. For each cell with gold:

   a. We perform a depth-first search (DFS) starting from that cell.

   b. We mark the cell as visited to avoid revisiting before exploring it.

   c. Explore all four directions (up, down, left, right) from the current cell.

   d. In each direction, if the next cell is valid (within bounds, unvisited, and has gold), recursively call DFS from that cell.

   e. Keep track of the maximum gold collected in the current path.

   f. After exploring all paths, unmark the starting cell as visited to allow revisiting from other starting points.

3. Update the overall maximum gold collected if the current path's gold is greater.

4. Return the overall maximum gold collected from any starting cell.

---


### Some key points are:
- DFS to explore all paths from each starting cell.
- Marking cells as visited to avoid revisiting.
- Backtracking to explore all possible paths.
- Updating the maximum gold collected at each step.

# Complexity
- Time complexity:`O(v * 3^v)`, where `v` is the number of non- zero cells

- Space complexity: `O(v * 3^v)`, where `v` is the number of non- zero cells

# Code
```C++ []
class Solution {
public:
    vector<int> roww = {1, -1, 0, 0};
    vector<int> coll = {0, 0, -1, 1};
    int maxGold = 0;

    int dfs(vector<vector<int>>& grid, int x, int y, int n, int m) {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) return 0;
        
        int curr = grid[x][y];
        grid[x][y] = 0;
        int localMaxGold = curr;

        for (int i = 0; i < 4; i++) {
            int newX = x + roww[i];
            int newY = y + coll[i];
            localMaxGold = max(localMaxGold, curr + dfs(grid, newX, newY, n, m));
        }

        grid[x][y] = curr;
        return localMaxGold;
    }

    int getMaximumGold(vector<vector<int>>& grid) {
        int n = grid.size(), m = grid[0].size();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] != 0) {
                    maxGold = max(maxGold, dfs(grid, i, j, n, m));
                }
            }
        }

        return maxGold;
    }
};
```
```java []
class Solution {
    int[] roww = {1, -1, 0, 0};
    int[] coll = {0, 0, -1, 1};
    int maxGold = 0;

    public int dfs(int[][] grid, int x, int y, int n, int m) {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) return 0;
        
        int curr = grid[x][y];
        grid[x][y] = 0;
        int localMaxGold = curr;

        for (int i = 0; i < 4; i++) {
            int newX = x + roww[i];
            int newY = y + coll[i];
            localMaxGold = Math.max(localMaxGold, curr + dfs(grid, newX, newY, n, m));
        }

        grid[x][y] = curr;
        return localMaxGold;
    }

    public int getMaximumGold(int[][] grid) {
        int n = grid.length, m = grid[0].length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] != 0) {
                    maxGold = Math.max(maxGold, dfs(grid, i, j, n, m));
                }
            }
        }

        return maxGold;
    }
}

```
```python []
class Solution:
    roww = [1, -1, 0, 0]
    coll = [0, 0, -1, 1]

    def dfs(self, grid, x, y, n, m):
        if x < 0 or x >= n or y < 0 or y >= m or grid[x][y] == 0:
            return 0
        
        curr = grid[x][y]
        grid[x][y] = 0
        localMaxGold = curr

        for i in range(4):
            newX = x + self.roww[i]
            newY = y + self.coll[i]
            localMaxGold = max(localMaxGold, curr + self.dfs(grid, newX, newY, n, m))

        grid[x][y] = curr
        return localMaxGold

    def getMaximumGold(self, grid):
        n = len(grid)
        m = len(grid[0])
        maxGold = 0

        for i in range(n):
            for j in range(m):
                if grid[i][j] != 0:
                    maxGold = max(maxGold, self.dfs(grid, i, j, n, m))

        return maxGold
```
# Aproach : Optimized (Early Termination)

- **Optimization**: The `checkIfAllNonZeros` function optimizes the solution by providing an early termination conditionwhen no cell is zero, leading to improved efficiency. Before starting the backtracking process, we check if its a grid containing only non zeroes. If it is, we return the sum of all non-zero values in the grid. Else backtracking function is called.

# Code
```C++ []
class Solution {
public:
    int maxGold = 0;
    vector<int> roww = {1, -1, 0, 0};
    vector<int> coll = {0, 0, -1, 1};
    int checkIfAllNonZeros(vector<vector<int>>& grid){
        int count = 0;
        for(int i=0; i<grid.size(); i++){
            for(int j=0; j<grid[0].size(); j++){
                if(grid[i][j] != 0) count += grid[i][j];
                else return 0;
            }
        }

        return count;
    }

    void backtrack(vector<vector<int>>& grid, int x, int y, int count){
        if(x < 0 || x >= grid.size() || y >= grid[0].size() || y < 0) return;

        if(grid[x][y]){
            int curr = grid[x][y];
            grid[x][y] = 0;
            count += curr;

            maxGold = max(maxGold, count);

            for(int i = 0; i < 4; i++) {
                int newX = x + roww[i];
                int newY = y + coll[i];
                backtrack(grid, newX, newY, count);
            }

            grid[x][y] = curr;
        }
    }

    int getMaximumGold(vector<vector<int>>& grid) {
        int count = checkIfAllNonZeros(grid);
        if(count) {
            return count; 
        }
        
        for(int i=0; i<grid.size(); i++) {
            for(int j=0; j<grid[0].size(); j++) {
                if(grid[i][j]) {
                    backtrack(grid, i, j, 0);
                }
            }
        }

        return maxGold;
    }
};
```
```java []
class Solution {
    int maxGold = 0;
    int[] roww = {1, -1, 0, 0};
    int[] coll = {0, 0, -1, 1};

    public int checkIfAllNonZeros(int[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] != 0) count += grid[i][j];
                else return 0;
            }
        }
        return count;
    }

    public void backtrack(int[][] grid, int x, int y, int count) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return;

        if (grid[x][y] != 0) {
            int curr = grid[x][y];
            grid[x][y] = 0;
            count += curr;
            maxGold = Math.max(maxGold, count);

            for (int i = 0; i < 4; i++) {
                int newX = x + roww[i];
                int newY = y + coll[i];
                backtrack(grid, newX, newY, count);
            }

            grid[x][y] = curr;
        }
    }

    public int getMaximumGold(int[][] grid) {
        int count = checkIfAllNonZeros(grid);
        if (count != 0) return count;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] != 0) {
                    backtrack(grid, i, j, 0);
                }
            }
        }

        return maxGold;
    }
}
```
```python []
class Solution:
    def __init__(self):
        self.maxGold = 0
        self.roww = [1, -1, 0, 0]
        self.coll = [0, 0, -1, 1]

    def checkIfAllNonZeros(self, grid):
        count = 0
        for row in grid:
            for cell in row:
                if cell != 0:
                    count += cell
                else:
                    return 0
        return count

    def backtrack(self, grid, x, y, count):
        if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]):
            return

        if grid[x][y] != 0:
            curr = grid[x][y]
            grid[x][y] = 0
            count += curr
            self.maxGold = max(self.maxGold, count)

            for i in range(4):
                newX = x + self.roww[i]
                newY = y + self.coll[i]
                self.backtrack(grid, newX, newY, count)

            grid[x][y] = curr

    def getMaximumGold(self, grid):
        count = self.checkIfAllNonZeros(grid)
        if count != 0:
            return count

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] != 0:
                    self.backtrack(grid, i, j, 0)

        return self.maxGold
```

---




Luffy: "Shishishi! So that's how you grab the biggest pile of gold, by exploring like a true pirate!"

Brook: "You got that right, Luffy San! But don't get too greedy, or you'll end up like me - nothing but bones! Yohohohoho"

![luffy x brook.jpeg](./images/1.jpeg)
