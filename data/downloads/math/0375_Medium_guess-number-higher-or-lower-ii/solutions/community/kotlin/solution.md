# Recursion | Memorization | Tabulation | Solution | 100%

**Author:** SureshChandak
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5543688/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/5543688/)

---

# Complexity
- Time complexity: O(n * n)

- Space complexity: O(n * n)

# Code
```
class Solution {
    fun getMoneyAmount(n: Int): Int {
        //return solve(1, n)

        //val dp = Array(n + 1) { IntArray(n + 1) { -1 } }
        //return solveMem(1, n, dp)

        return solveTab(n)
    }

    private fun solve(start: Int, end: Int): Int {

        // Base case
        if (start >= end) {
            return 0
        }

        var maxi = Int.MAX_VALUE
        for (i in start .. end) {
            val temp = Math.max(solve(start, i - 1), solve(i + 1, end))
            maxi = Math.min(maxi, i + temp)
        }

        return maxi
    }

    // Memorization
    private fun solveMem(start: Int, end: Int, dp: Array<IntArray>): Int {

        // Base case
        if (start >= end) {
            return 0
        }

        if (dp[start][end] != -1) {
            return dp[start][end]
        }

        var maxi = Int.MAX_VALUE
        for (i in start .. end) {
            val temp = Math.max(solveMem(start, i - 1, dp), solveMem(i + 1, end, dp))
            maxi = Math.min(maxi, i + temp)
        }

        dp[start][end] = maxi

        return dp[start][end]
    }

    // Tabulation
    private fun solveTab(n: Int): Int {

        val dp = Array(n + 2) { IntArray(n + 2) { 0 } }

        for (start in n downTo 1) {
            for (end in start .. n) {

                if (start == end) {
                    continue
                } else {

                    var maxi = Int.MAX_VALUE
                    for (i in start .. end) {
                        val temp = Math.max(dp[start][i - 1], dp[i + 1][end])
                        maxi = Math.min(maxi, i + temp)
                    }

                    dp[start][end] = maxi

                }

            }
        }

        return dp[1][n]
    }
}
```