# 🔥 🔥 🔥 Video Explanation | Easy to understand | 4 Languages | DFS | Backtracking 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 35
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154481/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154481/)

---

# [Detail Video Explanation Here](https://www.youtube.com/watch?v=hfrE-e-R8nk?sub_confirmation=1)

# Intuition
- The solution uses a DFS to explore all possible paths starting from each cell containing gold, keeping track of visited cells to avoid revisits. It calculates the maximum gold collectible from each path and updates the overall maximum. The process ensures every possible starting point is considered, ensuring the global maximum is found.

# Approach
**Grid Dimensions:**
- The first step is to determine the dimensions of the grid m (number of rows) and n (number of columns).

**Recursive DFS Helper Function:**
- Define a helper function helper(row, col, visited) that performs a Depth-First Search (DFS) starting from the cell at (row, col). This function:

- Checks for base cases where the search should stop (out of bounds, cell contains 0, or cell has already been visited).
- Adds the current cell to the visited set to mark it as visited.
- Recursively explores all four possible directions (down, up, right, left) from the current cell.
- Removes the current cell from the visited set after exploring all directions.
- Returns the maximum gold collected from the current cell and its reachable neighbors.

**Iterate Over All Cells:**
- Iterate over all cells in the grid. For each cell that contains gold, call the helper function to find the maximum gold that can be collected starting from that cell. Keep track of the maximum gold collected across all starting cells.

- Return the Result: Finally, return the maximum gold collected.

**Key Points:**

**Base Cases:** The base cases in the helper function ensure that the recursion stops when it goes out of bounds, encounters a cell with 0 gold, or revisits a cell.

**Visited Set:** The visited set keeps track of cells that have been visited in the current path to prevent revisiting them.

**Backtracking:** After exploring all four directions from a cell, the cell is removed from the visited set to allow other paths to explore it.
This approach ensures that all possible paths are explored and the maximum gold collected from any starting cell is found efficiently.

# Complexity
O(m * n)^2


- Space complexity:
O(m * n)

# Code
```Python []
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        nRows, nCols = len(grid), len(grid[0])
        visited = set()

        def inBound(row, col):
            return 0 <= row < nRows and 0 <= col < nCols

        def dfs(row, col):
            if not inBound(row, col) or (row, col) in visited or grid[row][col] == 0:
                return 0

            visited.add((row, col))

            left = dfs(row, col - 1)
            right = dfs(row, col + 1)
            up = dfs(row - 1, col)
            down = dfs(row + 1, col)

            visited.remove((row, col))

            return grid[row][col] + max(left, right, up, down)

        maxGold = 0

        for row in range(nRows):
            for col in range(nCols):
                if grid[row][col] and (row, col) not in visited:
                    maxGold = max(maxGold, dfs(row, col))

        return maxGold

```
```C++ []
class Solution {
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int maxGold = 0;

        // Helper function for DFS
        function<int(int, int)> helper = [&](int row, int col) -> int {
            if (row < 0 || row >= m || col < 0 || col >= n ||
                grid[row][col] == 0) {
                return 0;
            }

            int currentGold = grid[row][col];
            grid[row][col] = 0; // Mark the cell as visited by setting it to 0

            // Recursively explore all four directions
            int d = helper(row + 1, col);
            int u = helper(row - 1, col);
            int r = helper(row, col + 1);
            int l = helper(row, col - 1);

            // Restore the cell value
            grid[row][col] = currentGold;

            return currentGold + max({d, u, r, l});
        };

        // Iterate over all cells in the grid
        for (int row = 0; row < m; ++row) {
            for (int col = 0; col < n; ++col) {
                if (grid[row][col] > 0) {
                    maxGold = max(maxGold, helper(row, col));
                }
            }
        }

        return maxGold;
    }
};
```
```Java []
class Solution {
    public int getMaximumGold(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int maxGold = 0;

        // Helper function for DFS
        class Helper {
            public int dfs(int row, int col) {
                if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0) {
                    return 0;
                }

                int currentGold = grid[row][col];
                grid[row][col] = 0; // Mark the cell as visited by setting it to 0

                // Recursively explore all four directions
                int d = dfs(row + 1, col);
                int u = dfs(row - 1, col);
                int r = dfs(row, col + 1);
                int l = dfs(row, col - 1);

                // Restore the cell value
                grid[row][col] = currentGold;

                return currentGold + Math.max(Math.max(d, u), Math.max(r, l));
            }
        }

        Helper helper = new Helper();

        // Iterate over all cells in the grid
        for (int row = 0; row < m; ++row) {
            for (int col = 0; col < n; ++col) {
                if (grid[row][col] > 0) {
                    maxGold = Math.max(maxGold, helper.dfs(row, col));
                }
            }
        }

        return maxGold;
    }
}
```
```Javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    // Helper function for DFS
    function dfs(row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0) {
            return 0;
        }

        const currentGold = grid[row][col];
        grid[row][col] = 0;  // Mark the cell as visited by setting it to 0

        // Recursively explore all four directions
        const down = dfs(row + 1, col);
        const up = dfs(row - 1, col);
        const right = dfs(row, col + 1);
        const left = dfs(row, col - 1);

        // Restore the cell value
        grid[row][col] = currentGold;

        return currentGold + Math.max(down, up, right, left);
    }

    // Iterate over all cells in the grid
    for (let row = 0; row < m; ++row) {
        for (let col = 0; col < n; ++col) {
            if (grid[row][col] > 0) {
                maxGold = Math.max(maxGold, dfs(row, col));
            }
        }
    }

    return maxGold;
};
```

# **Please upvote**