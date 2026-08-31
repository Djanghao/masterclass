# O(m * n) | DFS | Beats 100% Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5612177/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5612177/)

---

### Intuition

This problem is fundamentally a graph theory problem. The key insight is to recognize that we're dealing with a connected component (the island) in a graph (the grid), and we need to find the most efficient way to break this component.

Initially, one might think of simply removing land cells one by one until the island is disconnected. However, this brute force approach would be inefficient for larger grids. A more sophisticated approach is to use the concept of articulation points from graph theory.

An articulation point, also known as a cut vertex, is a vertex in a graph whose removal increases the number of connected components. In the context of our island problem, an articulation point would be a land cell that, when removed, splits the island into two or more separate pieces.

The intuition here is that if we can find an articulation point in our island, we can disconnect it by removing just that single cell, which would take only one day. If no such point exists, we know we'll need to remove at least two cells to disconnect the island.

This leads us to Tarjan's algorithm, a depth-first search (DFS) based approach that can efficiently identify articulation points in a graph. By adapting this algorithm to our grid-based problem, we can determine whether we can disconnect the island in one day or if we need two days.

### Approach

Our approach can be broken down into several key steps:

**1. Initial Grid Analysis:**
   We start by analyzing the initial state of the grid. We need to count the number of islands and the total number of land cells. This initial check helps us handle several edge cases:
   - If there are no land cells or more than one island, we can return 0 as the grid is already disconnected.
   - If there's only one land cell, we return 1 as removing it will disconnect the grid in one day.

**2. Depth-First Search (DFS) Traversal:**
   We use a DFS to explore the island. This traversal serves two purposes:
   - It confirms that we indeed have a single connected island.
   - It allows us to identify articulation points using Tarjan's algorithm.

**3. Articulation Point Detection:**
   During the DFS traversal, we keep track of three key pieces of information for each cell:
   - Discovery time: When the cell is first visited during the DFS.
   - Lowest reachable time: The minimum discovery time of any cell that can be reached from the subtree rooted at the current cell, including the cell itself.
   - Parent: The cell from which we reached the current cell during the DFS.

   Using these, we can identify articulation points:
   - For a non-root cell: If it has a child whose lowest reachable time is greater than or equal to its own discovery time, it's an articulation point.
   - For the root cell: If it has more than one child in the DFS tree, it's an articulation point.

**4. Result Determination:**
   - If we find any articulation point, we return 1, as removing that point will disconnect the island in one day.
   - If no articulation point is found, we return 2, as we'll need to remove any two land cells to guarantee disconnection.

**Implementation**

1. **Class Structure and Variables:**

   We define a Solution class with several member variables:
   - time: A counter for the DFS discovery time.
   - discoveryTime and lowestReachableTime: 2D arrays to store these values for each cell.
   - DIRECTIONS: An array of coordinate pairs representing the four adjacent directions (right, down, left, up).
   - hasArticulationPoint: A boolean flag to indicate if we've found an articulation point.
   - totalLandCells: A counter for the total number of land cells.

**2. Main Method (minDays):**

   This method orchestrates the overall solution:
   - It initializes our data structures and variables.
   - It iterates through the grid to find land cells and start the DFS.
   - It handles edge cases (no land, single land cell, multiple islands).
   - It returns the final result based on whether an articulation point was found.

**3. DFS Method:**

   This is where the core of Tarjan's algorithm is implemented:
   - It assigns discovery and lowest reachable times to the current cell.
   - It explores adjacent land cells recursively.
   - It updates the lowest reachable time based on explored neighbors.
   - It checks for articulation point conditions and sets the flag if found.

**4. Helper Methods:**
   - isValidCell: Checks if a given cell is within the grid bounds and is a land cell.

Let's walk through the DFS method in more detail, as it's the heart of our solution:

1. We start by assigning the current time as both the discovery time and lowest reachable time for the current cell. We then increment the time counter.

2. We increment the totalLandCells counter, as we've found a new land cell.

3. We initialize a children counter to keep track of how many children this cell has in the DFS tree.

4. We then loop through all four adjacent directions:
   - For each direction, we calculate the new row and column.
   - We check if the new cell is valid (within bounds and a land cell).
   - If the new cell hasn't been discovered yet (discovery time is 0):
     * We increment the children counter.
     * We recursively call DFS on this new cell, passing the current cell as its parent.
     * After the recursive call, we update the lowest reachable time of the current cell based on the lowest reachable time of its child.
     * We check if this child makes the current cell an articulation point. This happens if the lowest reachable time of the child is greater than or equal to the discovery time of the current cell, and the current cell is not the root of the DFS tree.
   - If the new cell has been discovered and is not the parent of the current cell:
     * We update the lowest reachable time of the current cell based on the discovery time of this adjacent cell. This handles back edges in the graph.

5. After exploring all directions, we check if the current cell is the root of the DFS tree (parent is -1) and has more than one child. If so, it's an articulation point.



### Complexity

**Time Complexity:O(m * n)**
The time complexity of this solution is O(m * n), where m is the number of rows and n is the number of columns in the grid. This is because:
- We iterate through each cell in the grid once to start the DFS.
- The DFS itself visits each land cell exactly once.
- For each cell, we perform a constant number of operations (checking adjacent cells, updating times, etc.).

Even though we have nested loops in the main method and the DFS method, each cell is only fully processed once, giving us a linear time complexity in terms of the total number of cells.

**Space Complexity:O(m * n)**
The space complexity is also O(m * n). This comes from:
- The discoveryTime and lowestReachableTime arrays, each of which has m * n elements.
- The recursive call stack of the DFS, which in the worst case (a grid full of land cells arranged in a line) could be m * n deep.

While we do use other variables (time, hasArticulationPoint, totalLandCells), these take constant space and don't affect the overall space complexity.


# Code
```Java []
class Solution {
    private int time;
    private int[][] discoveryTime;
    private int[][] lowestReachableTime;
    private static final int[][] DIRECTIONS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    private boolean hasArticulationPoint;
    private int totalLandCells;

    public int minDays(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        discoveryTime = new int[rows][cols];
        lowestReachableTime = new int[rows][cols];
        time = 1;
        hasArticulationPoint = false;
        totalLandCells = 0;
        int islands = 0;

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (grid[row][col] == 1 && discoveryTime[row][col] == 0) {
                    islands++;
                    if (islands > 1) return 0; // More than one island
                    dfs(row, col, grid, -1, -1);
                }
            }
        }

        if (totalLandCells == 0) return 0; // No land
        if (totalLandCells == 1) return 1; // Only one land cell
        if (islands == 0) return 0; // No islands (should not happen if input is valid)
        return hasArticulationPoint ? 1 : 2;
    }

    private void dfs(int row, int col, int[][] grid, int parentRow, int parentCol) {
        discoveryTime[row][col] = time;
        lowestReachableTime[row][col] = time;
        time++;
        totalLandCells++;
        int children = 0;

        for (int[] direction : DIRECTIONS) {
            int newRow = row + direction[0];
            int newCol = col + direction[1];
            
            if (!isValidCell(newRow, newCol, grid)) {
                continue;
            }
            
            if (discoveryTime[newRow][newCol] == 0) {
                children++;
                dfs(newRow, newCol, grid, row, col);
                lowestReachableTime[row][col] = Math.min(lowestReachableTime[row][col], lowestReachableTime[newRow][newCol]);
                
                if (lowestReachableTime[newRow][newCol] >= discoveryTime[row][col] && parentRow != -1) {
                    hasArticulationPoint = true;
                }
            } else if ((newRow != parentRow || newCol != parentCol) && discoveryTime[newRow][newCol] < discoveryTime[row][col]) {
                lowestReachableTime[row][col] = Math.min(lowestReachableTime[row][col], discoveryTime[newRow][newCol]);
            }
        }

        if (parentRow == -1 && children > 1) {
            hasArticulationPoint = true;
        }
    }

    private boolean isValidCell(int row, int col, int[][] grid) {
        return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length && grid[row][col] == 1;
    }
}




//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349885103/
```
```C++ []
class Solution {
private:
    int time;
    vector<vector<int>> discoveryTime;
    vector<vector<int>> lowestReachableTime;
    const vector<pair<int, int>> DIRECTIONS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    bool hasArticulationPoint;
    int totalLandCells;

    void dfs(int row, int col, vector<vector<int>>& grid, int parentRow, int parentCol) {
        discoveryTime[row][col] = time;
        lowestReachableTime[row][col] = time;
        time++;
        totalLandCells++;
        int children = 0;

        for (const auto& direction : DIRECTIONS) {
            int newRow = row + direction.first;
            int newCol = col + direction.second;
            
            if (!isValidCell(newRow, newCol, grid)) {
                continue;
            }
            
            if (discoveryTime[newRow][newCol] == 0) {
                children++;
                dfs(newRow, newCol, grid, row, col);
                lowestReachableTime[row][col] = min(lowestReachableTime[row][col], lowestReachableTime[newRow][newCol]);
                
                if (lowestReachableTime[newRow][newCol] >= discoveryTime[row][col] && parentRow != -1) {
                    hasArticulationPoint = true;
                }
            } else if ((newRow != parentRow || newCol != parentCol) && discoveryTime[newRow][newCol] < discoveryTime[row][col]) {
                lowestReachableTime[row][col] = min(lowestReachableTime[row][col], discoveryTime[newRow][newCol]);
            }
        }

        if (parentRow == -1 && children > 1) {
            hasArticulationPoint = true;
        }
    }

    bool isValidCell(int row, int col, const vector<vector<int>>& grid) {
        return row >= 0 && col >= 0 && row < grid.size() && col < grid[0].size() && grid[row][col] == 1;
    }

public:
    int minDays(vector<vector<int>>& grid) {
        int rows = grid.size(), cols = grid[0].size();
        discoveryTime = vector<vector<int>>(rows, vector<int>(cols, 0));
        lowestReachableTime = vector<vector<int>>(rows, vector<int>(cols, 0));
        time = 1;
        hasArticulationPoint = false;
        totalLandCells = 0;
        int islands = 0;

        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (grid[row][col] == 1 && discoveryTime[row][col] == 0) {
                    islands++;
                    if (islands > 1) return 0; // More than one island
                    dfs(row, col, grid, -1, -1);
                }
            }
        }

        if (totalLandCells == 0) return 0; // No land
        if (totalLandCells == 1) return 1; // Only one land cell
        if (islands == 0) return 0; // No islands (should not happen if input is valid)
        return hasArticulationPoint ? 1 : 2;
    }
};





//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349890326/
```
```Python []
class Solution:
    def minDays(self, grid: List[List[int]]) -> int:
        self.time = 1
        self.hasArticulationPoint = False
        self.totalLandCells = 0
        DIRECTIONS = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        rows, cols = len(grid), len(grid[0])
        
        discoveryTime = [[0] * cols for _ in range(rows)]
        lowestReachableTime = [[0] * cols for _ in range(rows)]
        
        def isValidCell(row: int, col: int) -> bool:
            return 0 <= row < rows and 0 <= col < cols and grid[row][col] == 1
        
        def dfs(row: int, col: int, parentRow: int, parentCol: int) -> None:
            nonlocal discoveryTime, lowestReachableTime
            discoveryTime[row][col] = self.time
            lowestReachableTime[row][col] = self.time
            self.time += 1
            self.totalLandCells += 1
            children = 0
            
            for dr, dc in DIRECTIONS:
                newRow, newCol = row + dr, col + dc
                if not isValidCell(newRow, newCol):
                    continue
                
                if discoveryTime[newRow][newCol] == 0:
                    children += 1
                    dfs(newRow, newCol, row, col)
                    lowestReachableTime[row][col] = min(lowestReachableTime[row][col], lowestReachableTime[newRow][newCol])
                    
                    if lowestReachableTime[newRow][newCol] >= discoveryTime[row][col] and parentRow != -1:
                        self.hasArticulationPoint = True
                elif (newRow, newCol) != (parentRow, parentCol) and discoveryTime[newRow][newCol] < discoveryTime[row][col]:
                    lowestReachableTime[row][col] = min(lowestReachableTime[row][col], discoveryTime[newRow][newCol])
            
            if parentRow == -1 and children > 1:
                self.hasArticulationPoint = True
        
        islands = 0
        for row in range(rows):
            for col in range(cols):
                if grid[row][col] == 1 and discoveryTime[row][col] == 0:
                    islands += 1
                    if islands > 1:
                        return 0  # More than one island
                    dfs(row, col, -1, -1)
        
        if self.totalLandCells == 0:
            return 0  # No land
        if self.totalLandCells == 1:
            return 1  # Only one land cell
        if islands == 0:
            return 0  # No islands (should not happen if input is valid)
        return 1 if self.hasArticulationPoint else 2






#https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349894985/

```
```Go []
func minDays(grid [][]int) int {
    type Point struct {
        row, col int
    }
    
    directions := []Point{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
    rows, cols := len(grid), len(grid[0])
    discoveryTime := make([][]int, rows)
    lowestReachableTime := make([][]int, rows)
    for i := range discoveryTime {
        discoveryTime[i] = make([]int, cols)
        lowestReachableTime[i] = make([]int, cols)
    }
    
    var time, totalLandCells int
    var hasArticulationPoint bool
    
    isValidCell := func(row, col int) bool {
        return row >= 0 && col >= 0 && row < rows && col < cols && grid[row][col] == 1
    }
    
    var dfs func(row, col, parentRow, parentCol int)
    dfs = func(row, col, parentRow, parentCol int) {
        time++
        discoveryTime[row][col] = time
        lowestReachableTime[row][col] = time
        totalLandCells++
        children := 0
        
        for _, dir := range directions {
            newRow, newCol := row+dir.row, col+dir.col
            if !isValidCell(newRow, newCol) {
                continue
            }
            
            if discoveryTime[newRow][newCol] == 0 {
                children++
                dfs(newRow, newCol, row, col)
                lowestReachableTime[row][col] = min(lowestReachableTime[row][col], lowestReachableTime[newRow][newCol])
                
                if lowestReachableTime[newRow][newCol] >= discoveryTime[row][col] && parentRow != -1 {
                    hasArticulationPoint = true
                }
            } else if (newRow != parentRow || newCol != parentCol) && discoveryTime[newRow][newCol] < discoveryTime[row][col] {
                lowestReachableTime[row][col] = min(lowestReachableTime[row][col], discoveryTime[newRow][newCol])
            }
        }
        
        if parentRow == -1 && children > 1 {
            hasArticulationPoint = true
        }
    }
    
    islands := 0
    for row := 0; row < rows; row++ {
        for col := 0; col < cols; col++ {
            if grid[row][col] == 1 && discoveryTime[row][col] == 0 {
                islands++
                if islands > 1 {
                    return 0 // More than one island
                }
                dfs(row, col, -1, -1)
            }
        }
    }
    
    if totalLandCells == 0 {
        return 0 // No land
    }
    if totalLandCells == 1 {
        return 1 // Only one land cell
    }
    if islands == 0 {
        return 0 // No islands (should not happen if input is valid)
    }
    if hasArticulationPoint {
        return 1
    }
    return 2
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}





//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349895578/
```
```Rust []
impl Solution {
    pub fn min_days(grid: Vec<Vec<i32>>) -> i32 {
        let (rows, cols) = (grid.len(), grid[0].len());
        let mut discovery_time = vec![vec![0; cols]; rows];
        let mut lowest_reachable_time = vec![vec![0; cols]; rows];
        let mut time = 1;
        let mut has_articulation_point = false;
        let mut total_land_cells = 0;
        let directions = [(0, 1), (1, 0), (0, -1), (-1, 0)];
        
        fn is_valid_cell(row: i32, col: i32, grid: &Vec<Vec<i32>>) -> bool {
            row >= 0 && col >= 0 && (row as usize) < grid.len() && (col as usize) < grid[0].len() && grid[row as usize][col as usize] == 1
        }
        
        fn dfs(row: i32, col: i32, parent_row: i32, parent_col: i32, grid: &Vec<Vec<i32>>, 
               discovery_time: &mut Vec<Vec<i32>>, lowest_reachable_time: &mut Vec<Vec<i32>>, 
               time: &mut i32, has_articulation_point: &mut bool, total_land_cells: &mut i32) {
            discovery_time[row as usize][col as usize] = *time;
            lowest_reachable_time[row as usize][col as usize] = *time;
            *time += 1;
            *total_land_cells += 1;
            let mut children = 0;
            
            for &(dr, dc) in &[(0, 1), (1, 0), (0, -1), (-1, 0)] {
                let new_row = row + dr;
                let new_col = col + dc;
                
                if !is_valid_cell(new_row, new_col, grid) {
                    continue;
                }
                
                if discovery_time[new_row as usize][new_col as usize] == 0 {
                    children += 1;
                    dfs(new_row, new_col, row, col, grid, discovery_time, lowest_reachable_time, time, has_articulation_point, total_land_cells);
                    lowest_reachable_time[row as usize][col as usize] = lowest_reachable_time[row as usize][col as usize].min(lowest_reachable_time[new_row as usize][new_col as usize]);
                    
                    if lowest_reachable_time[new_row as usize][new_col as usize] >= discovery_time[row as usize][col as usize] && parent_row != -1 {
                        *has_articulation_point = true;
                    }
                } else if (new_row != parent_row || new_col != parent_col) && discovery_time[new_row as usize][new_col as usize] < discovery_time[row as usize][col as usize] {
                    lowest_reachable_time[row as usize][col as usize] = lowest_reachable_time[row as usize][col as usize].min(discovery_time[new_row as usize][new_col as usize]);
                }
            }
            
            if parent_row == -1 && children > 1 {
                *has_articulation_point = true;
            }
        }
        
        let mut islands = 0;
        for row in 0..rows {
            for col in 0..cols {
                if grid[row][col] == 1 && discovery_time[row][col] == 0 {
                    islands += 1;
                    if islands > 1 {
                        return 0; // More than one island
                    }
                    dfs(row as i32, col as i32, -1, -1, &grid, &mut discovery_time, &mut lowest_reachable_time, &mut time, &mut has_articulation_point, &mut total_land_cells);
                }
            }
        }
        
        if total_land_cells == 0 {
            return 0; // No land
        }
        if total_land_cells == 1 {
            return 1; // Only one land cell
        }
        if islands == 0 {
            return 0; // No islands (should not happen if input is valid)
        }
        if has_articulation_point {
            1
        } else {
            2
        }
    }
}




//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349896058/
```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    const discoveryTime = Array.from({length: rows}, () => new Array(cols).fill(0));
    const lowestReachableTime = Array.from({length: rows}, () => new Array(cols).fill(0));
    let time = 1;
    let hasArticulationPoint = false;
    let totalLandCells = 0;
    const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const isValidCell = (row, col) => {
        return row >= 0 && col >= 0 && row < rows && col < cols && grid[row][col] === 1;
    };

    const dfs = (row, col, parentRow, parentCol) => {
        discoveryTime[row][col] = time;
        lowestReachableTime[row][col] = time;
        time++;
        totalLandCells++;
        let children = 0;

        for (const [dx, dy] of DIRECTIONS) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (!isValidCell(newRow, newCol)) {
                continue;
            }

            if (discoveryTime[newRow][newCol] === 0) {
                children++;
                dfs(newRow, newCol, row, col);
                lowestReachableTime[row][col] = Math.min(lowestReachableTime[row][col], lowestReachableTime[newRow][newCol]);

                if (lowestReachableTime[newRow][newCol] >= discoveryTime[row][col] && parentRow !== -1) {
                    hasArticulationPoint = true;
                }
            } else if ((newRow !== parentRow || newCol !== parentCol) && discoveryTime[newRow][newCol] < discoveryTime[row][col]) {
                lowestReachableTime[row][col] = Math.min(lowestReachableTime[row][col], discoveryTime[newRow][newCol]);
            }
        }

        if (parentRow === -1 && children > 1) {
            hasArticulationPoint = true;
        }
    };

    let islands = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1 && discoveryTime[row][col] === 0) {
                islands++;
                if (islands > 1) return 0; // More than one island
                dfs(row, col, -1, -1);
            }
        }
    }

    if (totalLandCells === 0) return 0; // No land
    if (totalLandCells === 1) return 1; // Only one land cell
    if (islands === 0) return 0; // No islands (should not happen if input is valid)

    return hasArticulationPoint ? 1 : 2;
};



//https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/submissions/1349898385/
```


---
### BFS

```Java []
import java.util.*;

class Solution {
    private static final int[][] DIRECTIONS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    
    public int minDays(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        int landCount = 0;
        
        // Count land cells
        for (int[] row : grid) {
            for (int cell : row) {
                if (cell == 1) landCount++;
            }
        }
        
        // Check initial state
        if (landCount == 0 || isDisconnected(grid)) return 0;
        if (landCount == 1) return 1;
        
        // Try removing each land cell
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 0;
                    if (isDisconnected(grid)) return 1;
                    grid[i][j] = 1;
                }
            }
        }
        
        return 2;
    }
    
    private boolean isDisconnected(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        boolean[][] visited = new boolean[rows][cols];
        int count = 0;
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1 && !visited[i][j]) {
                    if (count > 0) return true; // More than one island
                    bfs(grid, i, j, visited);
                    count++;
                }
            }
        }
        
        return count != 1; // Disconnected if no island or more than one island
    }
    
    private void bfs(int[][] grid, int startRow, int startCol, boolean[][] visited) {
        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{startRow, startCol});
        visited[startRow][startCol] = true;
        
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            
            for (int[] dir : DIRECTIONS) {
                int newRow = current[0] + dir[0];
                int newCol = current[1] + dir[1];
                
                if (isValid(grid, newRow, newCol) && !visited[newRow][newCol]) {
                    queue.offer(new int[]{newRow, newCol});
                    visited[newRow][newCol] = true;
                }
            }
        }
    }
    
    private boolean isValid(int[][] grid, int row, int col) {
        return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] == 1;
    }
}
```
```C++ []

```
```Python []

```
```Go []

```
```Rust []

```
```JavaScript []

```

### Union Find

```Java []
class Solution {
    private static final int[][] DIRECTIONS = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    
    public int minDays(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        UnionFind uf = new UnionFind(rows * cols);
        int landCount = 0;
        
        // Initialize Union-Find
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    landCount++;
                    int current = i * cols + j;
                    uf.addLand();
                    for (int[] dir : DIRECTIONS) {
                        int ni = i + dir[0], nj = j + dir[1];
                        if (isValid(grid, ni, nj)) {
                            int neighbor = ni * cols + nj;
                            uf.union(current, neighbor);
                        }
                    }
                }
            }
        }
        
        // Check initial state
        if (landCount == 0 || uf.getCount() > 1) return 0;
        if (landCount == 1) return 1;
        
        // Check if removing any land cell disconnects the island
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    uf.reset();
                    for (int r = 0; r < rows; r++) {
                        for (int c = 0; c < cols; c++) {
                            if (grid[r][c] == 1 && (r != i || c != j)) {
                                int current = r * cols + c;
                                uf.addLand();
                                for (int[] dir : DIRECTIONS) {
                                    int nr = r + dir[0], nc = c + dir[1];
                                    if (isValid(grid, nr, nc) && (nr != i || nc != j)) {
                                        int neighbor = nr * cols + nc;
                                        uf.union(current, neighbor);
                                    }
                                }
                            }
                        }
                    }
                    if (uf.getCount() != 1) return 1;
                }
            }
        }
        
        return 2;
    }
    
    private boolean isValid(int[][] grid, int row, int col) {
        return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] == 1;
    }
    
    class UnionFind {
        private int[] parent;
        private int[] rank;
        private int count;
        private final int size;
        
        public UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            size = n;
            reset();
        }
        
        public void reset() {
            for (int i = 0; i < size; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
            count = 0;
        }
        
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX != rootY) {
                if (rank[rootX] < rank[rootY]) {
                    parent[rootX] = rootY;
                } else if (rank[rootX] > rank[rootY]) {
                    parent[rootY] = rootX;
                } else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
                count--;
            }
        }
        
        public void addLand() {
            count++;
        }
        
        public int getCount() {
            return count;
        }
    }
}
```
```C++ []

```
```Python []

```
```Go []

```
```Rust []

```
```JavaScript []

```


