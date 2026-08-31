# Concise readable JS code with comments explaining, O(m*n) time, O(1) space

**Author:** loia5tqd001
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5582898/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5582898/)

---

# Intuition
The hard part is how to make it *divisible by 4*. Some people write a whole chunk of separate if else code to handle that, but below is the concise one.

|#|Number of rows | Number of columns| Result|
|- |- |- |-|
|1. |Odd|Odd|create a special cross|
|2. |Odd|Even|create a special horizontal line|
|3. |Even|Odd|create a special vertical line|
|4. |Even|Even|easy case, we can always count 4 distinct cells at a time until finish|


# Approach
- Process 4 asymetrical distinct cells at a time
- If we meets the middle cell (only case #1), we must turn it to 0.
- If we meets the middle lines (except for middle cell) (case #1#2#3) we'll gather information and process later with another observation (read code to understand)

# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
    const numRows = grid.length, numCols = grid[0].length;

    // only for the middle lines (in case odd number of rows or columns)
    const pairCounts = [0, 0, 0]; // (0,0) (0,1) (1,1)

    let ans = 0;
    for (let r = 0; r < numRows / 2; r++) {
        for (let c = 0; c < numCols / 2; c++) {
            const r2 = numRows - 1 - r;
            const c2 = numCols - 1 - c;
            if (r !== r2 && c !== c2) {
                // 4 distinct cells, just turn minority to majority
                const cellValues = [0, 0];
                cellValues[grid[r][c]]++;
                cellValues[grid[r][c2]]++;
                cellValues[grid[r2][c]]++;
                cellValues[grid[r2][c2]]++;
                ans += Math.min(cellValues[0], cellValues[1]);
            } else if (r === r2 && c === c2) {
                // middle cell (in case oddxodd) must always become 0 in order to sum divisible  by 4
                ans += grid[r][c];
            } else {
                // 2 overlaps, 2 distincts, will process later
                const pairSum = grid[r][c] + grid[r2][c2];
                pairCounts[pairSum]++;
            }
        }
    }
    ans += pairCounts[1]; // all (0,1) pairs must flip

    // if we've flipped any (0,1) pair in the middle lines, won't need any further flip since 1->0, 3->4
    // otherwise might need 2 flips if from 2 -> (0 or 4), 6 -> (4 or 8),...
    if (pairCounts[1] === 0 && pairCounts[2] % 2 === 1) ans += 2;
    return ans;
};
```