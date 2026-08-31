# ✅ Easy 3 step C++/ Java / Py / JS Solution | DFS | With Visualization🏆|

**Author:** dev_yash_
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619134/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5619134/)

---

### Steps:
1. **Check if the Grid is Already Disconnected:**
   - Use a function to count the number of islands in the grid.
   - If there is already more than one island, the grid is disconnected, so return `0` days.

2. **Try Removing One Land Cell:**
   - Iterate over each land cell in the grid.
   - For each land cell, temporarily set it to water and check if this disconnection results in more than one island.
   - If removing one cell is sufficient to disconnect the grid, return `1` day.

3. **If Removing One Cell Isn\u2019t Enough, Return 2:**
   - If removing one land cell doesn\u2019t disconnect the grid, then it is guaranteed that removing any two land cells will disconnect the grid.
   - Therefore, if neither of the above conditions is met, return `2` days.


 ### **Iteration Visualization** : (Credit-GPT)


#### **1. Check if the Grid is Already Disconnected**

**Initial Grid Example:**
0 1 1 0
0 1 1 0
0 0 0 0


 - **Action:** Use a function to count the number of islands.
  - **Count:** There is 1 island.
  - **Result:** The grid is connected, so proceed to the next step.

#### **2. Try Removing One Land Cell**

- **Iteration 1: Removing Cell `(0,1)`**

   **After Removal:**
 
   0 0 1 0
   0 1 1 0
   0 0 0 0
   
   
- **Count:** Still 1 island (since removing one cell didn\u2019t disconnect the island).

- **Iteration 2: Removing Cell `(0,2)`**

  **After Removal:**
    0 1 0 0
0 1 1 0
0 0 0 0


- **Count:** Still 1 island.

- **Iteration 3: Removing Cell `(1,1)`**

  **After Removal:**
0 1 1 0
0 0 1 0
0 0 0 0


- **Count:** Still 1 island.

- **Iteration 4: Removing Cell `(1,2)`**

  **After Removal:**
0 1 1 0
0 1 0 0
0 0 0 0


- **Count:** Still 1 island.

Since removing one cell does not disconnect the grid, we need to check removing two cells.

#### **3. If Removing One Cell Isn\u2019t Enough, Return 2**

- **Try Removing Two Land Cells**

  **Remove `(0,1)` and `(0,2)`**

  **After Removal:**
0 0 0 0
0 1 1 0
0 0 0 0


- **Count:** 2 islands (disconnected).

- **Another Combination: Remove `(1,1)` and `(1,2)`**

  **After Removal:**
0 1 1 0
0 0 0 0
0 0 0 0
- **Count:** 2 islands (disconnected).








### C++
```
//More Optimized
class Solution {
public:
    // A helper function to perform Depth-First Search (DFS) to explore the island
    void dfs(vector<vector<int>>& grid, vector<vector<bool>>& visited, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        // Check boundaries and whether the cell is already visited or is water
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0 || visited[i][j])
            return;
        visited[i][j] = true; // Mark the cell as visited
        // Recursively visit all 4 directions
        dfs(grid, visited, i+1, j);
        dfs(grid, visited, i-1, j);
        dfs(grid, visited, i, j+1);
        dfs(grid, visited, i, j-1);
    }

    // Function to count the number of islands (connected groups of 1's)
    int countIslands(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        int count = 0;

        // Iterate through the grid to find and count each island
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                // If we find a land cell that is not visited, start a new DFS
                if (grid[i][j] == 1 && !visited[i][j]) {
                    count++;
                    dfs(grid, visited, i, j); // Explore the island
                }
            }
        }
        return count;
    }
    
    // Function to determine the minimum number of days to disconnect the island
    int minDays(vector<vector<int>>& grid) {
        // Step 1: Check if the grid is already disconnected
        if (countIslands(grid) != 1) return 0;
        
        int m = grid.size(), n = grid[0].size();

        // Step 2: Try removing one land cell
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0; // Remove the land cell
                    // Check if removing this cell disconnects the grid
                    if (countIslands(grid) != 1) return 1;
                    grid[i][j] = 1; // Restore the land cell
                }
            }
        }

        // Step 3: If removing one cell isn't enough, return 2 (as it is guaranteed to be sufficient)
        return 2;
    }
};

```
### Java
```
 class Solution {
    // Helper function to perform Depth-First Search (DFS) to explore the island
    private void dfs(int[][] grid, boolean[][] visited, int i, int j) {
        int m = grid.length, n = grid[0].length;
        // Check boundaries and whether the cell is already visited or is water
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0 || visited[i][j]) 
            return;
        visited[i][j] = true; // Mark the cell as visited
        // Recursively visit all 4 directions
        dfs(grid, visited, i + 1, j);
        dfs(grid, visited, i - 1, j);
        dfs(grid, visited, i, j + 1);
        dfs(grid, visited, i, j - 1);
    }

    // Function to count the number of islands (connected groups of 1's)
    private int countIslands(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        boolean[][] visited = new boolean[m][n];
        int count = 0;

        // Iterate through the grid to find and count each island
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // If we find a land cell that is not visited, start a new DFS
                if (grid[i][j] == 1 && !visited[i][j]) {
                    count++;
                    dfs(grid, visited, i, j); // Explore the island
                }
            }
        }
        return count;
    }
    
    // Function to determine the minimum number of days to disconnect the island
    public int minDays(int[][] grid) {
        // Step 1: Check if the grid is already disconnected
        if (countIslands(grid) != 1) 
            return 0;
        
        int m = grid.length, n = grid[0].length;

        // Step 2: Try removing one land cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0; // Remove the land cell
                    // Check if removing this cell disconnects the grid
                    if (countIslands(grid) != 1) 
                        return 1;
                    grid[i][j] = 1; // Restore the land cell
                }
            }
        }

        // Step 3: If removing one cell isn't enough, return 2 (as it is guaranteed to be sufficient)
        return 2;
    }
}


```

### Python3
```

class Solution:
    # Helper function to perform Depth-First Search (DFS) to explore the island
    def dfs(self, grid: List[List[int]], visited: List[List[bool]], i: int, j: int):
        m, n = len(grid), len(grid[0])
        # Check boundaries and whether the cell is already visited or is water
        if i < 0 or j < 0 or i >= m or j >= n or grid[i][j] == 0 or visited[i][j]:
            return
        visited[i][j] = True # Mark the cell as visited
        # Recursively visit all 4 directions
        self.dfs(grid, visited, i+1, j)
        self.dfs(grid, visited, i-1, j)
        self.dfs(grid, visited, i, j+1)
        self.dfs(grid, visited, i, j-1)

    # Function to count the number of islands (connected groups of 1's)
    def countIslands(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        count = 0

        # Iterate through the grid to find and count each island
        for i in range(m):
            for j in range(n):
                # If we find a land cell that is not visited, start a new DFS
                if grid[i][j] == 1 and not visited[i][j]:
                    count += 1
                    self.dfs(grid, visited, i, j) # Explore the island
        return count
    
    # Function to determine the minimum number of days to disconnect the island
    def minDays(self, grid: List[List[int]]) -> int:
        # Step 1: Check if the grid is already disconnected
        if self.countIslands(grid) != 1:
            return 0
        
        m, n = len(grid), len(grid[0])

        # Step 2: Try removing one land cell
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    grid[i][j] = 0 # Remove the land cell
                    # Check if removing this cell disconnects the grid
                    if self.countIslands(grid) != 1:
                        return 1
                    grid[i][j] = 1 # Restore the land cell

        # Step 3: If removing one cell isn't enough, return 2 (as it is guaranteed to be sufficient)
        return 2

```
### JavaScript
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    // Helper function to perform Depth-First Search (DFS) to explore the island
    function dfs(grid, visited, i, j) {
        const m = grid.length, n = grid[0].length;
        // Check boundaries and whether the cell is already visited or is water
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j]) return;
        visited[i][j] = true; // Mark the cell as visited
        // Recursively visit all 4 directions
        dfs(grid, visited, i + 1, j);
        dfs(grid, visited, i - 1, j);
        dfs(grid, visited, i, j + 1);
        dfs(grid, visited, i, j - 1);
    }

    // Function to count the number of islands (connected groups of 1's)
    function countIslands(grid) {
        const m = grid.length, n = grid[0].length;
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        let count = 0;

        // Iterate through the grid to find and count each island
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                // If we find a land cell that is not visited, start a new DFS
                if (grid[i][j] === 1 && !visited[i][j]) {
                    count++;
                    dfs(grid, visited, i, j); // Explore the island
                }
            }
        }
        return count;
    }
    
    // Function to determine the minimum number of days to disconnect the island
    if (countIslands(grid) !== 1) return 0;
    
    const m = grid.length, n = grid[0].length;

    // Step 2: Try removing one land cell
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0; // Remove the land cell
                // Check if removing this cell disconnects the grid
                if (countIslands(grid) !== 1) return 1;
                grid[i][j] = 1; // Restore the land cell
            }
        }
    }

    // Step 3: If removing one cell isn't enough, return 2 (as it is guaranteed to be sufficient)
    return 2;
};


```
#### STAY COOL STAY DISCIPLINED..

![image](./images/0.gif)