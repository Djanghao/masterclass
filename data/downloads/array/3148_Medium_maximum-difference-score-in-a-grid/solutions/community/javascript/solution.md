# Simple recursive solution with Memoization

**Author:** sadanandpai
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5153941/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5153941/)

---

# Intuition
Recursively go in the bottom and right direction making a note of max. Use memoization to optimize.

# Approach
- Start from top left (0, 0)
- Find the max of bottomMax and rightMax
- Update if max at the current cell is greater
- Update the memoized cell and return

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(m * n)

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({ length: m }, () => []);
    let max = -Infinity;
    getMaxScore(0, 0);
    return max;

    function getMaxScore(row, col) {
        if (row >= m || col >= n) {
            return -Infinity;
        }

        if (dp[row][col] !== undefined) {
            return dp[row][col];
        }

        const bottom = getMaxScore(row + 1, col);
        const right = getMaxScore(row, col + 1);
        const currentMax = Math.max(bottom, right);
        max = Math.max(max, currentMax - grid[row][col]); // update max
        return dp[row][col] = Math.max(grid[row][col], currentMax);
    }
};
```