# DFS in TypeScript

**Author:** horrible_leetcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/5633748/](https://leetcode.com/problems/coloring-a-border/solutions/5633748/)

---


# Code
```
function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
    const [R, C] = [grid.length, grid[0].length];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const key = `${row}#${col}`;
    const visited = new Set([key]);
    const original = grid[row][col];

    function dfs(r, c) {
        for (let [dr, dc] of directions) {
            const row = r + dr;
            const col = c + dc;
            const key = `${row}#${col}`;
            if (!(visited.has(key))) {
                if (row >= 0 && row < R && col >= 0 && col < C && grid[row][col] === original) {
                    visited.add(key);
                    dfs(row, col);
                } else {
                    grid[r][c] = color;
                }
            }

        }
    }
    dfs(row, col);
    return grid;
};
```