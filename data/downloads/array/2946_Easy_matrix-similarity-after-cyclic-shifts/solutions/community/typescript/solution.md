# In TypeScript, Beats 100% ✨

**Author:** anaskhafaga
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/6006818/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/6006818/)

---

Here\u2019s the completed template based on your solution:

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires checking if each row in a matrix can be rotated by a given offset `k` so that the resulting rows are similar to the original. My first thought was to consider how elements shift in even and odd-indexed rows when rotated by a given offset, using modular arithmetic to handle the wrapping around the matrix dimensions.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate the remainder `rem` when `k` is divided by the number of columns `m`. This remainder represents the number of steps each element will shift in a single rotation within each row.
2. For each row:
   - If it\u2019s an even-indexed row, shift elements to the left by `rem`.
   - If it\u2019s an odd-indexed row, shift elements to the right by `rem`.
3. Check if each element in the shifted position matches the corresponding original element in each row.
4. If all rows satisfy the condition, return `true`; otherwise, return `false`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  - $$O(n \	imes m)$$, where `n` is the number of rows and `m` is the number of columns, as we iterate through each element in the matrix once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
  - $$O(1)$$, as we only use a constant amount of extra space for variables and calculations.

# Code
```typescript
function areSimilar(mat: number[][], k: number): boolean {
    const n = mat.length;
    const m = mat[0].length;
    const rem = k % m;
    // complete cycle
    if ( rem === 0 ) return true;
    
    for (let i = 0; i < n; i++) {
        if ( i % 2 === 0 ) {
            for (let j = 0; j < m; j++) {
                const idx = j - rem < 0 ? m + (j - rem) : j - rem;
                if (mat[i][j] !== mat[i][idx]) return false;
            }
        } else {
            for (let j = 0; j < m; j++) {
                const idx = j + rem >= m ? j + rem - m : j + rem;
                if (mat[i][j] !== mat[i][idx]) return false;
            }
        }
    }

    return true;
}
```