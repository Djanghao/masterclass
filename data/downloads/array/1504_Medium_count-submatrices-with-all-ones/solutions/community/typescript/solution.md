# Time: O(NM^2) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/5613301/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/5613301/)

---

# Complexity

- Time complexity: $$O(M^2N)$$

- Space complexity: $$O(1)$$
    Mutates the input matrix. Otherwise: $$O(MN)$$

# Code

```typescript []
function numSubmat(mat: number[][]): number {
    const Y = mat.length;
    const X = mat[0].length;

    // Calculate consecutive ones from left
    for (let y = 0; y < Y; ++y) {
        for (let x = 1; x < X; ++x) {
            mat[y][x] = (mat[y][x] === 0) ? 0 : mat[y][x-1] + 1;
        }
    }

    // Initialize sum
    let sum = 0;

    // Calculate submatrices
    for (let y = 0; y < Y; ++y) {
        for (let x = 0; x < X; ++x) {
            let width = Infinity;
            for (let z = y; z >= 0 && width > 0; --z) {
                width = Math.min(width, mat[z][x]);
                sum += width;
            }
        }
    }

    return sum;
};
```

```javascript []
/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSubmat(mat) {
    const Y = mat.length;
    const X = mat[0].length;

    // Calculate consecutive ones from left
    for (let y = 0; y < Y; ++y) {
        for (let x = 1; x < X; ++x) {
            mat[y][x] = (mat[y][x] === 0) ? 0 : mat[y][x-1] + 1;
        }
    }

    // Initialize sum
    let sum = 0;

    // Calculate submatrices
    for (let y = 0; y < Y; ++y) {
        for (let x = 0; x < X; ++x) {
            let width = Infinity;
            for (let z = y; z >= 0 && width > 0; --z) {
                width = Math.min(width, mat[z][x]);
                sum += width;
            }
        }
    }

    return sum;
};
```