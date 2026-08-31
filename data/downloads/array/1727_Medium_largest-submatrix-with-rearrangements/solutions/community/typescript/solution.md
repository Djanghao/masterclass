# Typescript: sort and without sort solutions (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331511/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331511/)

---

# Complexity
- Time complexity:
O(n * m)

- Space complexity:
O(n)

# Code
```
// TC (m * n), SC: (n)
function largestSubmatrix(matrix: number[][]): number {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    let maxArea: number = 0;
    let prevHeights: [number, number][] = [];

    for (let row = 0; row < m; row++) {
        const heights: [number, number][] = [];
        const seen: boolean[] = new Array(n).fill(false);

        for (const [height, col] of prevHeights) {
            if (matrix[row][col] == 1) {
                heights.push([height + 1, col]);
                seen[col] = true;
            }
        }

        for (let col = 0; col < n; col++) {
            if (!seen[col] && matrix[row][col] == 1) {
                heights.push([1, col]);
            }
        }

        for (let i = 0; i < heights.length; i++) {
            maxArea = Math.max(maxArea, heights[i][0] * (i + 1));
        }

        prevHeights = heights;
    }

    return maxArea;
}

// TC: O(m * n * logn), SC: O(m * n)
function largestSubmatrixSort(matrix: number[][]): number {
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    let maxArea: number = 0;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] != 0 && row > 0) {
                matrix[row][col] += matrix[row - 1][col];
            }
        }

        const currentRow = [...matrix[row]].sort((a, b) => b - a);

        for (let i = 0; i < n; i++) {
            maxArea = Math.max(maxArea, currentRow[i] * (i + 1));
        }
    }

    return maxArea;
};
```