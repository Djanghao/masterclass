# js and ts.

**Author:** anuchataowkaen
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/5538124/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/5538124/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
``` javascript []
function maxIncreaseKeepingSkyline(grid) {
    const row = grid.length
    const col = grid[0].length
    const maxRows = Array(row).fill(0)
    const maxCols = Array(col).fill(0)
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            maxCols[c] = Math.max(maxCols[c], grid[r][c])
            maxRows[r] = Math.max(maxRows[r], grid[r][c])
        }
    }
    let sum = 0
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            sum += Math.min(maxRows[r], maxCols[c]) - grid[r][c]
        }
    }
    return sum
};
```
``` typescript []
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const row = grid.length
    const col = grid[0].length
    const maxRows = Array(row).fill(0)
    const maxCols = Array(col).fill(0)
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            maxCols[c] = Math.max(maxCols[c], grid[r][c])
            maxRows[r] = Math.max(maxRows[r], grid[r][c])
        }
    }
    let sum = 0
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            sum += Math.min(maxRows[r], maxCols[c]) - grid[r][c]
        }
    }
    return sum
};
```