# Typescript 100% faster and 100% memory efficient

**Author:** mash100
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2492089/](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/solutions/2492089/)

---

```
function maxSumSubmatrix(matrix: number[][], k: number): number {
    // Idea:
    // calculate sum of the rectangle from [0,0] to [i,j]
    // then calculate sum of rectangles from [x1,y1] to [x2,y2] using the previously calculated sum in O(1)

    const m = matrix.length, n = matrix[0].length;
    const MIN_VAL = -100 * m * n;

    // Calculate row-wise cummilitive sum
    const rowCSum: number[][] = []; // O(m*n)
    for (let i = 0; i < m; i++) { // O(m*n)
        rowCSum[i] = [];
        rowCSum[i][0] = matrix[i][0];
        for (let j = 1; j < n; j++) {
            rowCSum[i][j] = rowCSum[i][j - 1] + matrix[i][j];
        }
    }

    const sums: number[][] = rowCSum.map(row => row.map(col => col)); // O(m*n)

    for (let c = 0; c < n; c++) { // O(m*n)
        for (let r = 1; r < m; r++) {
            sums[r][c] = sums[r - 1][c] + rowCSum[r][c];
        }
    }

    let ans = MIN_VAL;
    let reg = {};

    // O(m^2*n^2)
    for (let x1 = 0; x1 < m; x1++) {
        for (let y1 = 0; y1 < n; y1++) {
            for (let x2 = x1; x2 < m; x2++) {
                for (let y2 = y1; y2 < n; y2++) {
                    let t = sums[x2][y2];
                    if (x1 > 0) t -= sums[x1 - 1][y2];
                    if (y1 > 0) t -= sums[x2][y1 - 1];

                    if (x1 > 0 && y1 > 0) t += sums[x1 - 1][y1 - 1];

                    if (t === k) return t;
                    if (t <= k && ans < t) { ans = t; reg = { x1, y1, x2, y2 } }
                }
            }
        }
    }

    return ans;
};
```

Time complexity: O(m^2 * n^2)
Space: O(m*n) + O(m*n)