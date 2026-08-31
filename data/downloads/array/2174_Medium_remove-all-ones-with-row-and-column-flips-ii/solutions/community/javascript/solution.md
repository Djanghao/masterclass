# Backtracking Faster than 100%

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5673729/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5673729/)

---

# Intuition
Use backtracking.
# Approach
Collect the black points and make them white one by one.
Use a whitedByRow[] and a whitedByCol[] to record the already-whited rows and columns. When the currently processed point is in an already-whited row or column, we skip it.
# Complexity
- Time complexity:
Not Sure
- Space complexity:
Not Sure
# Code
```javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var removeOnes = function(grid) {
    const R = grid.length, C = grid[0].length
    const whitedByRow = new Array(R).fill(false)
    const whitedByCol = new Array(C).fill(false)
    const blackPoints = []

    for (const [i, row] of grid.entries()) {
        for (const [j, val] of row.entries()) {
            if (val === 1)
                blackPoints.push([i, j])
        }
    }


    const len = blackPoints.length
    let result = Infinity, outcome = 0
    function dfs(fromIndex) {
        if (fromIndex === len) {
            if (blackPoints.every(point => {
                const [i, j] = point
                return whitedByRow[i] === true || whitedByCol[j] === true
            })) {
                result = Math.min(result, outcome)
            }

            return
        }


        const point = blackPoints[fromIndex]
        const [i, j] = point
        if (whitedByRow[i] > 0 || whitedByCol[j] > 0) {
            dfs(1 + fromIndex)
            return
        }

        dfs(1 + fromIndex)


        whitedByRow[i] = true
        whitedByCol[j] = true
        outcome++

        dfs(1 + fromIndex)

        outcome--
        whitedByCol[j] = false
        whitedByRow[i] = false
    }

    
    dfs(0)
    return result
};
```