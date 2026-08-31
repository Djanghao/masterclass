# Javascript / Typescript | Explained | O(m × n) / O(1)

**Author:** ivan-moskvin
**Votes:** 18
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1695876/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1695876/)

---

Main idea: every row should be equal or complementary to the first row.
If it's not, there are always will be this pesky extra values.

Algorithm:
1. Iterate over rows and compare each value with **the first row's value**
2. If the first values are the same, all other must be the same too (rows are equal)
3. Otherwise values must be complementary (rows are complementary)

Time:  O(m \xD7 n)
Space: O(1)

Thanks to @idontknoooo :)
```
function removeOnes(grid: number[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;
    const firstRow = grid[0];
    
    // Start from the second row. 
    // We will compare everything with the first one.
    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            // If first element of rows are the same,
            // every other element should be the same too
            if(grid[i][0] === firstRow[0]) {
                if(grid[i][j] !== firstRow[j]) return false;
            } else {
                // Otherwise, every element should be complementary (equal to the reverted version)
                if(grid[i][j] !== (1 - firstRow[j])) return false;
            }
        }
    }
    
    return true;
};
```