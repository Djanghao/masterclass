# Space Optimize Solution - O(1)

**Author:** SureshChandak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/5372976/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/5372976/)

---

# Complexity
- Time complexity: O(2 * n)
- Space complexity: O(1)

# Code
```
class Solution {
    fun minSideJumps(obstacles: IntArray): Int {
        //return solve(obstacles, 2, 0)

        //val dp = Array(4) { IntArray(obstacles.size) { -1 } }
        //return solveMem(obstacles, 2, 0, dp)

        //return solveTab(obstacles)

        return solveSC(obstacles)
    }

    // Recursion
    private fun solve(obstacles: IntArray, currLane: Int, currPos: Int): Int {

        // Base case
        if (currPos == obstacles.size - 1) {
            return 0
        }

        if (obstacles[currPos + 1] != currLane) {
            return solve(obstacles, currLane, currPos + 1)
        }
        else {
            // sideways jump
            var ans = Int.MAX_VALUE
            for (i in 1 .. 3) {
                if (currLane != i && obstacles[currPos] != i) {
                    val temp = 1 + solve(obstacles, i, currPos)
                    ans = Math.min(ans, temp)
                }
            }
            return ans
        }
    }

    // Recursion + Memorization
    private fun solveMem(obstacles: IntArray, currLane: Int, currPos: Int, dp: Array<IntArray>): Int {

        // Base case
        if (currPos == obstacles.size - 1) {
            return 0
        }

        if (dp[currLane][currPos] != -1) {
            return dp[currLane][currPos]
        }

        if (obstacles[currPos + 1] != currLane) {
            return solveMem(obstacles, currLane, currPos + 1, dp)
        }
        else {
            // sideways jump
            var ans = Int.MAX_VALUE
            for (i in 1 .. 3) {
                if (currLane != i && obstacles[currPos] != i) {
                    val temp = 1 + solveMem(obstacles, i, currPos, dp)
                    ans = Math.min(ans, temp)
                }
            }

            dp[currLane][currPos] = ans

            return dp[currLane][currPos]
        }
    }

    // Tabulation
    private fun solveTab(obstacles: IntArray): Int {

        val n = obstacles.size - 1
        val dp = Array(4) { IntArray(obstacles.size) { 100000009 } }

        dp[0][n] = 0
        dp[1][n] = 0
        dp[2][n] = 0
        dp[3][n] = 0

        for (currPos in n - 1 downTo 0) {
            for (currLane in 1 .. 3) {

                if (obstacles[currPos + 1] != currLane) {
                    dp[currLane][currPos] = dp[currLane][currPos + 1]
                }
                else {
                    // sideways jump
                    var ans = 100000009
                    for (i in 1 .. 3) {
                        if (currLane != i && obstacles[currPos] != i) {
                            val temp = 1 + dp[i][currPos + 1]
                            ans = Math.min(ans, temp)
                        }
                    }
                    dp[currLane][currPos] = ans
                }

            }
        }

        return Math.min(dp[2][0], Math.min(1+dp[1][0], 1+dp[3][0]))
    }

    // Space optimization
    private fun solveSC(obstacles: IntArray): Int {

        val n = obstacles.size - 1

        val curr = IntArray(4) { Int.MAX_VALUE }
        var next = IntArray(4) { Int.MAX_VALUE }

        next[0] = 0
        next[1] = 0
        next[2] = 0
        next[3] = 0

        for (currPos in n - 1 downTo 0) {
            for (currLane in 1 .. 3) {

                if (obstacles[currPos + 1] != currLane) {
                    curr[currLane] = next[currLane]
                }
                else {
                    // sideways jump
                    var ans = 100000009
                    for (i in 1 .. 3) {
                        if (currLane != i && obstacles[currPos] != i) {
                            val temp = 1 + next[i]
                            ans = Math.min(ans, temp)
                        }
                    }

                    curr[currLane] = ans
                }

            }

            next = curr.copyOf(curr.size)
        }

        return Math.min(next[2], Math.min(1+next[1], 1+next[3]))
    }

}
```