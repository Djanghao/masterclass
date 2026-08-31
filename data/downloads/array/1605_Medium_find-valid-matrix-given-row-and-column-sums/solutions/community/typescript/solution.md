# Greedy | Time: O(MN) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5513109/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5513109/)

---

# Code 1 - Greedy

- Time complexity: $O(MN)$

- Space complexity: $O(1)$
Output not included

```typescript
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const Y = rowSum.length;
    const X = colSum.length;

    // Initialize matrix
    const matrix: number[][] = new Array(Y);
    for (let y = 0; y < Y; ++y){
        matrix[y] = new Array(X).fill(0);
    }

    // Populate matrix
    for (let y = 0; y < Y; ++y) {
        for (let x = 0; x < X; ++x) {
            const value = Math.min(rowSum[y], colSum[x]);
            rowSum[y] -= value;
            colSum[x] -= value;
            matrix[y][x] = value;
        }
    }

    return matrix;
};
```

# Code 2 - Optimized Greedy

- Time complexity: $O(MN)$

- Space complexity: $O(1)$
Output not included

[Submission](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/submissions/1328733142/)

![Submission runtime](./images/0.png)

Stops populating a row once the row is exhausted.

```typescript
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const Y = rowSum.length;
    const X = colSum.length;

    // Initialize matrix
    const matrix: number[][] = new Array(Y);
    for (let y = 0; y < Y; ++y){
        matrix[y] = new Array(X).fill(0);
    }

    // Populate matrix
    for (let y = 0; y < Y; ++y) {
        for (let x = 0; x < X; ++x) {
            if (rowSum[y] <= colSum[x]) {
                colSum[x] -= rowSum[y];
                matrix[y][x] = rowSum[y];
                break;
            }

            const value = colSum[x];
            colSum[x] = 0;
            rowSum[y] -= value;
            matrix[y][x] = value;
        }
    }

    return matrix;
};
```

# Code 3 - Optimized Greedy II

- Time complexity: $O(M + N)$

- Space complexity: $O(1)$
Output not included

[Submission](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/submissions/1328749199/)

![Submission runtime](./images/1.png)

```typescript
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const Y = rowSum.length;
    const X = colSum.length;

    // Initialize matrix
    const matrix: number[][] = new Array(Y);
    for (let y = 0; y < Y; ++y){
        matrix[y] = new Array(X).fill(0);
    }

    // Populate matrix
    let y = 0;
    let x = 0;
    while (y < Y && x < X) {
        if (rowSum[y] <= colSum[x]) {
            colSum[x] -= rowSum[y];
            matrix[y][x] = rowSum[y];
            ++y;
        } else {
            rowSum[y] -= colSum[x];
            matrix[y][x] = colSum[x]; 
            ++x;
        }
    }

    return matrix;
};
```