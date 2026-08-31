# 💥[EXPLAINED] Runtime beats 99.63% (TypeScript)

**Author:** r9n
**Votes:** 6
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/5679338/](https://leetcode.com/problems/max-area-of-island/solutions/5679338/)

---

# Intuition
The problem requires finding the largest connected group of 1s (land) in a binary matrix, where cells are connected 4-directionally. The key idea is to explore each island using Depth-First Search (DFS) and calculate its area by counting the connected cells.

# Approach


Traverse the grid and initiate a DFS whenever an unvisited land cell (1) is encountered.
During DFS, mark cells as visited by setting them to 0 (water) to avoid revisiting.
Accumulate the area of the island by exploring all four possible directions (up, down, left, right) from each cell.

# Complexity
- Time complexity:
O(m * n): Each cell in the grid is visited exactly once, either during traversal or while performing DFS.

- Space complexity:
O(m * n): In the worst case, the recursion stack for DFS could be as deep as the number of cells in the grid.

# Code
```typescript []
function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    
    let maxArea = 0;

    // Helper function to perform DFS
    const dfs = (i: number, j: number): number => {
        // Boundary check and check if the cell is land (1)
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            return 0;
        }
        
        // Mark the cell as visited by setting it to 0 (water)
        grid[i][j] = 0;

        // Calculate the area by exploring all 4 directions
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    };

    // Traverse the entire grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // If it's land, perform DFS to calculate the area
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
}

```