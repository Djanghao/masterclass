# [TypeScript] Simple solution, no If-Then (62ms, beats 100%)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4858415/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4858415/)

---

# Approach

# Complexity
- Time complexity: $\\mathcal{O}(n^2)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function minimumOperationsToWriteY(grid: number[][]): number {
    const cntY = Array(3).fill(0), cntX = Array(3).fill(0), n = grid.length - 1, n2 = n / 2;
    // count whole grid
    for (let x = 0; x <= n; x++)
        for (let y = 0; y <= n; y++)
            cntX[grid[y][x]]++;
    // count Y only
    cntY[grid[n2][n2]]++;
    for (let i = 0; i < n2; i++)
        cntY[grid[i][i]]++,
            cntY[grid[i][n - i]]++,
            cntY[grid[n - i][n2]]++;
    // subtract Y from the grid
    for (let i = 0; i < 3; i++) cntX[i] -= cntY[i];

    const max = Math.max(
        cntY[0] + cntX[1], cntY[0] + cntX[2],
        cntY[1] + cntX[0], cntY[1] + cntX[2],
        cntY[2] + cntX[0], cntY[2] + cntX[1],
    )
    return (n + 1) ** 2 - max;
};
```