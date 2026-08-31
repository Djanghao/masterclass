# [JS/TS] Typescript Beats 100% || Time O(m*n) Space O(m+n) || Using Simplified Formula

**Author:** cimbraien
**Votes:** 6
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3291663/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/3291663/)

---

# Approach
1. Loop through the matrix to calculate the values of onesRow and onesCol. The zerosRow and zerosCol can be calculated from these.
2. Change the values of each element in matrix `grid` to the difference between ones and zeros.
3. Instead of using the supplied formula :
 ```diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j]```
we can simplify the formula to :
```diff[i][j] = 2 * onesRow[i] - m + 2 * onesColj - n```
, because :
```zerosRow[i] = m - onesRow[i]```
4. Return the modified matrix.

# Complexity
- Time complexity:
$$O(m*n)$$ 

- Space complexity:
$$O(m+n)$$

# Code
```
function onesMinusZeros(grid: number[][]): number[][] {
    let onesRow = new Array(grid.length).fill(0);
    let onesCol = new Array(grid[0].length).fill(0);
    const m = grid[0].length;
    const n = grid.length;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] != 1) continue;
            onesRow[i]++;
            onesCol[j]++;
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            grid[i][j] = (2 * onesRow[i]) - m + (2 * onesCol[j]) - n;
        }
    }
    return grid;
};
```