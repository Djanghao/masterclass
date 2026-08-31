# DFS (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615964/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5615964/)

---

# Approach
The solution uses a depth-first search (DFS) algorithm to traverse the grid and mark all connected cells as part of the same region. This is similar to how the flood fill algorithm works.

1. The approach is to first create a new grid that is three times the size of the original grid, and then populate the new grid with values based on the characters in the original grid. 
- The '/' and '' characters are represented by lines in the new grid.

2. Iterate over each cell in the new grid and counts the number of regions. 
- If a cell is not part of any region, it increments the count and performs a depth-first search (DFS) to mark all connected cells as part of the same region.

The DFS function is used to mark all connected cells as part of the same region. 
It checks if the current cell is out of bounds or already marked as part of a region, and if not, marks the current cell as part of a region and performs DFS on the adjacent cells.

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the size of the grid. This is because the solution iterates over each cell in the grid, performing a constant amount of work for each cell. The DFS function is called for each cell that is not part of a region, and the worst-case scenario is that all cells are not part of a region.

- Space complexity:
$$O(n^2)$$, as the new grid created to handle the '/' and '' characters has a size of n^2 * 3. Additionally, the recursion stack used by the DFS function can have a maximum depth of n^2.

# Code
``` python3 []
class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        n = len(grid)

        # Create a new grid with three times the size of the original grid
        # to account for the additional rows and columns necessary to handle
        # the '/' and '\\' characters.
        new_grid = [[0] * (n * 3) for _ in range(n * 3)]

        # Populate the new grid with the appropriate values based on the
        # characters in the original grid.
        for r in range(n):
            for c in range(n):
                ch = grid[r][c]

                if ch == '/':
                    # '/' character is represented by a line from the top to
                    # the bottom of the grid cell.
                    new_grid[r * 3][c * 3 + 2] = 1
                    new_grid[r * 3 + 1][c * 3 + 1] = 1
                    new_grid[r * 3 + 2][c * 3] = 1
                elif ch == '\\\\':
                    # '\\' character is represented by a line from the left to
                    # the right of the grid cell.
                    new_grid[r * 3][c * 3] = 1
                    new_grid[r * 3 + 1][c * 3 + 1] = 1
                    new_grid[r * 3 + 2][c * 3 + 2] = 1

        # Initialize the count of regions to 0.
        res = 0

        # Iterate over each cell in the new grid and count the number of regions.
        for i in range(n * 3):
            for j in range(n * 3):
                # If the cell is not part of any region, increment the count and
                # perform a depth-first search to mark all connected cells as
                # part of the same region.
                if new_grid[i][j] == 0:
                    res += 1
                    self.dfs(new_grid, i, j, n * 3)

        return res

    def dfs(self, new_grid, r, c, n):
        """
        Depth-first search function to mark all connected cells as part of the same 
        region.
        """
        # Check if the current cell is out of bounds or already marked as part of 
        # a region.
        if r < 0 or r >= n or c < 0 or c >= n or new_grid[r][c] == 1:
            return

        # Mark the current cell as part of a region.
        new_grid[r][c] = 1

        # Perform DFS on the adjacent cells.
        self.dfs(new_grid, r + 1, c, n)
        self.dfs(new_grid, r - 1, c, n)
        self.dfs(new_grid, r, c + 1, n)
        self.dfs(new_grid, r, c - 1, n)
```
``` javascript []
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;

    // Create a new grid with three times the size of the original grid
    // to account for the additional rows and columns necessary to handle
    // the '/' and '\\' characters.
    const newGrid = Array.from({ length: n * 3 }, () =>
        new Array(n * 3).fill(0)
    );

    // Populate the new grid with the appropriate values based on the
    // characters in the original grid.
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const ch = grid[r][c];

            if (ch === '/') {
                // '/' character is represented by a line from the top to
                // the bottom of the grid cell.
                newGrid[r * 3][c * 3 + 2] = 1;
                newGrid[r * 3 + 1][c * 3 + 1] = 1;
                newGrid[r * 3 + 2][c * 3] = 1;
            } else if (ch === '\\\\') {
                // '\\' character is represented by a line from the left to
                // the right of the grid cell.
                newGrid[r * 3][c * 3] = 1;
                newGrid[r * 3 + 1][c * 3 + 1] = 1;
                newGrid[r * 3 + 2][c * 3 + 2] = 1;
            }
        }
    }

    let res = 0;

    // Iterate over each cell in the new grid and count the number of regions.
    for (let i = 0; i < n * 3; i++) {
        for (let j = 0; j < n * 3; j++) {
            // If the cell is not part of any region, increment the count and
            // perform a depth-first search to mark all connected cells as
            // part of the same region.
            if (newGrid[i][j] === 0) {
                res++;
                dfs(newGrid, i, j, n * 3);
            }
        }
    }

    return res;
};

var dfs = function(newGrid, r, c, n) {
    /**
     * Depth-first search function to mark all connected cells as part of the same 
     * region.
     */
    // Check if the current cell is out of bounds or already marked as part of 
    // a region.
    if (r < 0 || r >= n || c < 0 || c >= n || newGrid[r][c] === 1) {
        return;
    }

    // Mark the current cell as part of a region.
    newGrid[r][c] = 1;

    // Perform DFS on the adjacent cells.
    dfs(newGrid, r + 1, c, n);
    dfs(newGrid, r - 1, c, n);
    dfs(newGrid, r, c + 1, n);
    dfs(newGrid, r, c - 1, n);
}
```
``` php []
class Solution {

    /**
     * @param String[] $grid
     * @return Integer
     */
    function regionsBySlashes($grid) {
        $n = count($grid);

        // Create a new grid with three times the size of the original grid
        // to account for the additional rows and columns necessary to handle
        // the '/' and '\\' characters.
        $newGrid = array_fill(0, $n * 3, array_fill(0, $n * 3, 0));

        // Populate the new grid with the appropriate values based on the
        // characters in the original grid.
        for ($r = 0; $r < $n; $r++) {
            for ($c = 0; $c < $n; $c++) {
                $ch = $grid[$r][$c];

                if ($ch === '/') {
                    // '/' character is represented by a line from the top to
                    // the bottom of the grid cell.
                    $newGrid[$r * 3][$c * 3 + 2] = 1;
                    $newGrid[$r * 3 + 1][$c * 3 + 1] = 1;
                    $newGrid[$r * 3 + 2][$c * 3] = 1;
                } elseif ($ch === '\\\\') {
                    // '\\' character is represented by a line from the left to
                    // the right of the grid cell.
                    $newGrid[$r * 3][$c * 3] = 1;
                    $newGrid[$r * 3 + 1][$c * 3 + 1] = 1;
                    $newGrid[$r * 3 + 2][$c * 3 + 2] = 1;
                }
            }
        }

        $res = 0;

        // Iterate over each cell in the new grid and count the number of regions.
        for ($i = 0; $i < $n * 3; $i++) {
            for ($j = 0; $j < $n * 3; $j++) {
                    // If the cell is not part of any region, increment the count and
                    // perform a depth-first search to mark all connected cells as
                    // part of the same region.
                    if ($newGrid[$i][$j] === 0) {
                    $res++;
                    $this->dfs($newGrid, $i, $j, $n * 3);
                }
            }
        }

        return $res;
    }

    private function dfs(&$newGrid, $r, $c, $n) {
        /**
        * Depth-first search function to mark all connected cells as part of the same 
        * region.
        */
        // Check if the current cell is out of bounds or already marked as part of 
        // a region.
        if ($r < 0 || $r >= $n || $c < 0 || $c >= $n || $newGrid[$r][$c] === 1) {
            return;
        }

        // Mark the current cell as part of a region.
        $newGrid[$r][$c] = 1;

        // Perform DFS on the adjacent cells.
        $this->dfs($newGrid, $r + 1, $c, $n);
        $this->dfs($newGrid, $r - 1, $c, $n);
        $this->dfs($newGrid, $r, $c + 1, $n);
        $this->dfs($newGrid, $r, $c - 1, $n);
    }
}
```