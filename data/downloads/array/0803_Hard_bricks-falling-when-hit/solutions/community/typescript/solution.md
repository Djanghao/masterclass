# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/4618312/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/4618312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

function hitBricks(grid: number[][], hits: number[][]): number[] {
    const m = grid.length, n = grid[0].length;
    const h = [0, 0, -1, 1], v = [-1, 1, 0, 0];
    const bfs = (i: number, j: number, grid: number[][]): number => {
        let cnt = 0;
        grid[i][j] = 2;
        for (let k = 0; k < 4; k++) {
            const ni = i + h[k], nj = j + v[k];
            if (ni < 0 || nj < 0 || ni >= m || nj >= n || grid[ni][nj] !== 1)
                continue;
            grid[ni][nj] = 2;
            cnt += 1 + bfs(ni, nj, grid);
        }
        return cnt;
    };
    const res = new Array<number>(hits.length).fill(0);
    for (let i = 0; i < hits.length; i++) {
        const x = hits[i][0], y = hits[i][1];
        if (grid[x][y] === 1)
            grid[x][y] = 0;
        else {
            hits[i][1] = -1;
            hits[i][0] = -1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (grid[0][i])
            bfs(0, i, grid);
    }
    for (let k = hits.length - 1; k >= 0; k--) {
        const i = hits[k][0], j = hits[k][1];
        if (i === -1 || j === -1) {
            res[k] = 0;
            continue;
        }
        grid[i][j] = 1;
        if (i === 0) {
            res[k] = bfs(i, j, grid);
            continue;
        }
        for (let p = 0; p < 4; p++) {
            const ni = i + h[p], nj = j + v[p];
            if (ni < 0 || nj < 0 || ni >= m || nj >= n || grid[ni][nj] !== 2)
                continue;
            res [k] = bfs(i, j, grid);
            break;
        }
    }
    return res;
}

```