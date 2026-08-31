# ✅🔥Beats 98% | using JavaScript, Python, Typescript 🔥| explanation 👍

**Author:** raviTejaY
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589868/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/4589868/)

---

# Intuition

The problem is to find the minimum falling path sum through the given matrix, starting from any element in the first row and moving to the next row either *directly below* or *diagonally left / right*.

We want to minimize the sum of values as we traverse down the matrix.
# Approach

1. Initialize `prevRow` with the values from the first row of the matrix since any falling path can start from any element in the first row.

2. Iterate through the matrix row by row, starting from the second row (index 1).

3. For each element in the current row `currRow`, calculate the minimum path sum by considering three possibilities:

    - going straight down from the element in the previous row `top`.
    - going diagonally left-down from the element in the previous row `topL`, *if the current element has a valid left neighbor*
    - going diagonally right-down from the element in the previous row `topR`, *if the current element has a valid right neighbor*

4. Update the `currRow` with the minimum path sums for the current row

5. Set `preRow` to be equal to `currRow` for the next iteration to use it as the previous row

6. After iterating through all rows, find the minimum value in the last row (which represents the minimum falling path sum starting from any element in the last row).

7. Return the minimum value found in step 6 as the result.

# Complexity
### Time complexity: $$O(M*N)$$

The code iterates through each element in the matrix once, row by row.
this takes **O(M*N)** time
    M - number of rows
    N - number of columns

### Space complexity: $$O(N)$$

We use two arrays, `prevRow` and `currRow`, to keep track of the minimum path sums for the current and previous rows. Both arrays have a length of N (number of columns in the matrix).

Therefore, space complexity is **O(N)** since we only keep track of two rows at a time, and the space required does not depend on the number of rows (M).

# Code
```javascript []
// JavaScript

var minFallingPathSum = function(matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    
    let prevRow = matrix[0].slice(); // Initialize with the first row
    
    for (let r = 1; r < M; r++) {
        const currRow = [];
        for (let c = 0; c < N; c++) {
            const curr = matrix[r][c];
            const top = curr + prevRow[c];
            const topL = curr + (prevRow[c - 1] || Infinity);
            const topR = curr + (prevRow[c + 1] || Infinity);
            currRow[c] = Math.min(top, topL, topR);
        }
        prevRow = currRow; // Update the previous row with the current row
    }
    
    return Math.min(...prevRow);
};
```
```python []
# PYTHON

class Solution(object):
    def minFallingPathSum(self, matrix):
        M = len(matrix)
        N = len(matrix[0])
    
        prevRow = matrix[0][:]  # Initialize with the first row
    
        for r in range(1, M):
            currRow = [0] * N
            for c in range(N):
                curr = matrix[r][c]
                top = curr + prevRow[c]
                topL = curr + prevRow[c - 1] if c > 0 else float('inf')
                topR = curr + prevRow[c + 1] if c < N - 1 else float('inf')
                currRow[c] = min(top, topL, topR)
        
            prevRow = currRow  # Update the previous row with the current row
    
        return min(prevRow)
```
```TypeScript []
/* TypeScript */

function minFallingPathSum(matrix: number[][]): number {
    const M: number = matrix.length;
    const N: number = matrix[0].length;

    let prevRow: number[] = [...matrix[0]]; // Initialize with the first row

    for (let r: number = 1; r < M; r++) {
        const currRow: number[] = new Array(N).fill(0);
        for (let c: number = 0; c < N; c++) {
            const curr: number = matrix[r][c];
            const top: number = curr + prevRow[c];
            const topL: number = curr + (prevRow[c - 1] || Infinity);
            const topR: number = curr + (prevRow[c + 1] || Infinity);
            currRow[c] = Math.min(top, topL, topR);
        }
        prevRow = [...currRow]; // Update the previous row with the current row
    }

    return Math.min(...prevRow);
};
```

### Please Upvote!

![intro-import.jpg](./images/0.jpeg)


