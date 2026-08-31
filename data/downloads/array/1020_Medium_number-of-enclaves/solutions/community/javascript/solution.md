# Binary Matrix using DFS method

**Author:** unicodick
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3389505/](https://leetcode.com/problems/number-of-enclaves/solutions/3389505/)

---


```
const numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    
    const dfs = (i, j) => {
        grid[i][j] = 0;
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] === 1) {
                dfs(ni, nj);
            }
        }
    };
    
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) {
            dfs(i, 0);
        }
        if (grid[i][n-1] === 1) {
            dfs(i, n-1);
        }
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 1) {
            dfs(0, j);
        }
        if (grid[m-1][j] === 1) {
            dfs(m-1, j);
        }
    }
    
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
};

```