# Map + sorting

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/5705977/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/5705977/)

---

# Code
```javascript []
/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    // Arrays to store the maximum path length for each row and column
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);

    // Dictionary to map values to their indices in the matrix
    const valToIndices = new Map();

    // Matrix to store the maximum path length starting from each cell
    const maxPathLength = Array.from({ length: m }, () => Array(n).fill(0));

    // Set to hold all unique values in the matrix
    const decreasingSet = new Set();

    // Fill valToIndices map and decreasingSet
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const val = mat[i][j];
            if (!valToIndices.has(val)) valToIndices.set(val, []);
            valToIndices.get(val).push([i, j]);
            decreasingSet.add(val);
        }
    }

    // Sort all unique values in non-increasing order
    const sortedValues = [...decreasingSet].sort((a, b) => b - a);

    for (const val of sortedValues) {
        const indices = valToIndices.get(val);

        // Update maxPathLength for cells with the current value
        for (const [i, j] of indices) {
            maxPathLength[i][j] = Math.max(rows[i], cols[j]) + 1;
        }

        // Update rows and cols arrays with the maximum path lengths
        for (const [i, j] of indices) {
            rows[i] = Math.max(rows[i], maxPathLength[i][j]);
            cols[j] = Math.max(cols[j], maxPathLength[i][j]);
        }
    }

    // Return the maximum value from rows and cols
    return Math.max(Math.max(...rows), Math.max(...cols));
};

```