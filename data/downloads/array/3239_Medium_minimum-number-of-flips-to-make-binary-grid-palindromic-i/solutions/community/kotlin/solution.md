# Optimized Kotlin solution, 6 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5964441/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5964441/)

---

# Approach
Count the number of cell pairs that break palindromic rows and columns, take the minimum of these two.
The solution avoids unnecessary operations by pre-computing some values to be used inside loops and doing `xor` of two cells instead of their comparison.

# Code
```kotlin []
class Solution {
    fun minFlips(grid: Array<IntArray>): Int {
        val m = grid.size
        val mr = m - 1
        val n = grid[0].size
        val mc = n - 1

        var rcount = 0
        for (i in 0 until m) {
            val row = grid[i]
            for (j in 0 until (n ushr 1)) rcount += row[j] xor row[mc - j]
        }

        var ccount = 0
        for (i in 0 until (m ushr 1)) {
            val row1 = grid[i]
            val row2 = grid[mr - i]
            for (j in 0 until n) ccount += row1[j] xor row2[j]
        }

        return min(rcount, ccount)
    }
}
```