# Easy to follow double DFS solution - dp/bitmask - O(n * r) space/time - beats 100%

**Author:** A1m
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2690479/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2690479/)

---

# Intuition
Stacking rows is a dfs problem that we can tackle with memoization. The problem is to find the proper memoization strategy by preprocessing inputs.

# Approach
Make it two steps:
- preprocessing: precompute a list of possible rows. Represent them as a bitmask, where a `1` represents a joint. Do not represent joints at the start/end.
- Do a dfs through heights and stack a new row when bitmasks of `prevRow & curRow != 0`. If the same height was processed with the same previous row before get the result from dp[height][rowIndex]

# Complexity
- Time complexity: `O(n * r)` where `r` is the number of possible rows

- Space complexity: `O(n * r)`

# Code
```
class Solution {
    private val MOD = 1000000007
    fun buildWall(height: Int, width: Int, bricks: IntArray): Int {
        val rows = computeRows(width, bricks)
        if (rows.size == 0) return 0
        val dp = Array<IntArray>(height + 1) { IntArray(rows.size) { -1 } }
        return dfsCol(height, 0, rows, dp, true)
    }

    private fun computeRows(width: Int, bricks: IntArray): ArrayList<Int> {
        val rows = ArrayList<Int>()
        dfsRow(0, 0, width, bricks, rows)
        return rows
    }

    private fun dfsRow(pos:Int, config: Int, width: Int, bricks: IntArray, rows: ArrayList<Int>) {
        if (width == pos) {
            rows.add(config)
            return
        }
        if (pos > width) {
            return
        }
        for (brick in bricks) {
            val newPos = pos + brick
            var newConfig = config
            if (newPos != width) {
                newConfig = config or (1 shl newPos)
            }
            dfsRow(newPos, newConfig, width, bricks, rows)
        }
    }

    private fun dfsCol(height: Int, lastRowIndex: Int, rows: ArrayList<Int>, dp:Array<IntArray>, isFirstRow: Boolean): Int {
        if (height == 0) return 1
        if (!isFirstRow and (dp[height][lastRowIndex] != -1)) {
            return dp[height][lastRowIndex]
        }

        var newConfigs = 0
        for (ri in rows.indices) {
            if (isFirstRow or (rows[ri] and rows[lastRowIndex] == 0)) {
                newConfigs = (newConfigs + dfsCol(height - 1, ri, rows, dp, false)) % MOD
            }
        }
        dp[height][lastRowIndex] = newConfigs
        return newConfigs
    }
}
```