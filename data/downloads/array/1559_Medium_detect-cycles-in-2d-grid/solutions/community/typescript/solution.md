# Optimal Solution in TypeScript 🏆💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5367053/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5367053/)

---

# Intuition
The problem can be approached using Depth-First Search (DFS) to detect cycles in the grid. The idea is to traverse the grid and, at each cell, initiate a DFS to explore potential cycles. If a cycle is found, return true. If all cells are traversed without detecting a cycle, return false.

# Approach
1. **DFS Traversal**: Use DFS to traverse the grid from each unvisited cell.
2. **Cycle Detection**: Track the parent cell to avoid immediate backtracking.
3. **Visited Tracking**: Use a 2D array to keep track of visited cells.
4. **Valid Moves**: Only move to adjacent cells (up, down, left, right) with the same value as the current cell.

# Complexity
- **Time Complexity**: ***O(m * n)***, where m is the number of rows and *n* is the number of columns in the grid. Each cell is visited at most once.
- **Space Complexity**: ***O(m * n)*** for the visited array and recursion stack.

# Code
```typescript
function containsCycle(grid: string[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    function dfs(x: number, y: number, fromX: number, fromY: number, startChar: string): boolean {
        if (visited[x][y]) {
            return true;
        }

        visited[x][y] = true;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx === fromX && ny === fromY) {
                continue;
            }

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === startChar) {
                if (dfs(nx, ny, x, y, startChar)) {
                    return true;
                }
            }
        }

        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1, grid[i][j])) {
                    return true;
                }
            }
        }
    }

    return false;
};

```

### Explanation
1. **Initialize**: Set up the grid dimensions, visited tracking array, and directions for movement.
2. **DFS Function**: 
   - Mark the current cell as visited.
   - Explore all four possible directions.
   - Skip the parent cell to avoid immediate backtracking.
   - Continue DFS if moving to a valid adjacent cell with the same value.
   - Detect and return true if a cycle is found.
3. **Main Loop**: Iterate through each cell in the grid. If the cell is not visited, initiate DFS from that cell.
4. **Result**: Return true if any cycle is detected; otherwise, return false.