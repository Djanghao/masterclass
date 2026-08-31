# maximum-non-negative-product-in-a-matrix - TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/5946272/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/5946272/)

---

**Initialization:** We define two DP tables: dpMax for storing the maximum products and dpMin for storing the minimum products encountered up to each cell.
**Dynamic Programming Update:**
For each cell (i, j), we calculate the maximum and minimum products by considering the cells from which we can arrive: the cell above (i-1, j) and the cell to the left (i, j-1).
Depending on whether the current cell's value is positive or negative, we update our max and min product accordingly.
Result Extraction: The result is taken from dpMax[m-1][n-1], and if it is negative, we return -1. Otherwise, we return the result modulo 10^9 + 7.

# Code
```typescript []
function maxProductPath(grid: number[][]): number {
    const MOD = 1_000_000_007;
    const m = grid.length;
    const n = grid[0].length;

    // dp array to store the max product and min product
    const dpMax: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const dpMin: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    
    dpMax[0][0] = grid[0][0];
    dpMin[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            const candidates: number[] = [];
            if (i > 0) {
                candidates.push(dpMax[i - 1][j], dpMin[i - 1][j]);
            }
            if (j > 0) {
                candidates.push(dpMax[i][j - 1], dpMin[i][j - 1]);
            }

            const current = grid[i][j];
            let maxProduct = -Infinity;
            let minProduct = Infinity;

            for (const candidate of candidates) {
                if (current >= 0) {
                    maxProduct = Math.max(maxProduct, candidate * current);
                    minProduct = Math.min(minProduct, candidate * current);
                } else {
                    maxProduct = Math.max(maxProduct, candidate * current);
                    minProduct = Math.min(minProduct, candidate * current);
                }
            }

            dpMax[i][j] = maxProduct;
            dpMin[i][j] = minProduct;
        }
    }

    const result = dpMax[m - 1][n - 1];
    return result < 0 ? -1 : result % MOD;

    
};
```