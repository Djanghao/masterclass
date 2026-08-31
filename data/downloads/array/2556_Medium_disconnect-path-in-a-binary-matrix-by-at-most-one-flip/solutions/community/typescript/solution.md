# TypeScript DFS, Time: 85 ms, Space: 50.3 MB

**Author:** iza-pik
**Votes:** 2
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3142765/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3142765/)

---

# Intuition
We will need to traverse the grid until we reach the end.

# Approach
We will use the DFS algorithm to move right and down the grid and flag visited cells as `0`. If we traverse the grid again and there is another path to reach the end, it means that we would need to flip more than one cell to disconnect from the end, then we return false, as we know it is impossible to cut the path with only one flip.

# Complexity
- Time complexity: $$O(n + m)$$
- Space complexity: $$O(m + n)$$

# Code
```
const isPossibleToCutPath = (grid: number[][]): boolean => {
    // Support variables
    const maxX = grid[0].length - 1;
    const maxY = grid.length - 1;
    let canReachEnd = false;
    // DFS helper
    const dfs = (col = 0, row = 0) => {
        // Base case: stop when we have reached the end of the grid
        if (canReachEnd) return;
        // Base case: end destination reached 
        if (col === maxX && row === maxY) {
            canReachEnd = true;
            return;
        }
        // Flagging the current cell as not visitable again
        grid[row][col] = 0;
        // Moving right
        if (col < maxX && grid[row][col + 1]) {
            dfs(col + 1, row);
        }
        // Moving down
        if (row < maxY && grid[row + 1][col]) {
            dfs(col, row + 1);
        }
    }
    // First DFS traversal to check if we can reach the end
    dfs();
    // Check if we are already disconnected
    if (!canReachEnd) return true;
    // Second run
    canReachEnd = false;
    dfs();
    return !canReachEnd;
};
```