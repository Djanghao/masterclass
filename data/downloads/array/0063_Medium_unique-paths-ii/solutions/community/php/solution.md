# DP tabulation, O(n) space (!), O(m * n) time

**Author:** lzref
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/5459004/](https://leetcode.com/problems/unique-paths-ii/solutions/5459004/)

---

# Intuition
Since the robot can only move down or to the right, the number of unique paths for current cell is a sum of the unique paths for the cell on the right (if exists) and the cell below (if exists).

If certain cell has an obstacle, we'll force its number of unique paths to 0.

This problem is easily solvable by tabulating a two-dimentional array of size m * n. However, we can go even further!

If we go row by row from the bottom of the grid to the top, we'll only ever need to reference the current row and the row below it, but nothing below that.

In fact, if we go through the grid columns from right to left, we can use a single array and update it in place as we go.

# Approach
First let's consider the unoptimized DP tabulation approach.

Let `dp[i][j]` be the number of unique paths for a cell that is i rows above and j columns to the right of the destination (note that this numbering is different from how the grid is normally numbered; here bottom right is `(0, 0)`).

Then we can calculate it based on the cell below and cell to the right:
`dp[i][j] = dp[i - 1][j] + dp[i][j - 1]`

As long as we initialize the destination cell to 1 and iterate through cells in the right order, we can easily calculate the numbers of unique paths for all cells.

As you see, only the current (`dp[i]`) and the previous (`dp[i - 1]`) rows are ever necessary. In fact, the only cell used from the current row is `dp[i][j - 1]`. So if we start with `dp[i - 1]` and start adding `j-1`'th element to each `j`'th element, we'll end up with the correct array corresponding to `dp[i]`. In other words, we'll be updating this array in place, and at any time the `j`'th element is on the border between unupdated elements from the previous row of `dp` and the updated elements from the current row of `dp`.

# Complexity
- Time complexity:
$$O(m *n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution
{
    /**
     * @param Integer[][] $obstacleGrid
     */
    function uniquePathsWithObstacles(array $obstacleGrid): int
    {
        $m = \\count($obstacleGrid);
        $n = \\count($obstacleGrid[0]);

        $row = array_fill(0, $n, 0);
        $row[0] = 1;

        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($obstacleGrid[$i][$j]) {
                    $row[$j] = 0;
                    continue;
                }

                $row[$j] += ($row[$j - 1] ?? 0);
            }
        }

        return $row[$n - 1];
    }
}
```