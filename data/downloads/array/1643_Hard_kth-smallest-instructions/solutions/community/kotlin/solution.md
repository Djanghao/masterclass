# [Kotlin] Finding Kth Lexicographically Smallest Path to Destination

**Author:** teogor
**Votes:** 4
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/5050597/](https://leetcode.com/problems/kth-smallest-instructions/solutions/5050597/)

---

# Intuition
To reach the destination in lexicographically smallest instructions, we can follow the approach of generating combinations of 'H' (right) and 'V' (down) movements. We'll calculate the number of ways to reach each cell using dynamic programming (DP) to build a combination table. Then we'll construct the path by choosing the direction based on the number of ways to reach the next cell.

# Approach
1. Initialize `hCount` to the column count and `vCount` to the row count of the destination.
2. Create a DP table `dp` of size `(row + col + 1) x (col + 1)` to store the combinations.
3. Fill the DP table by calculating binomial coefficients.
4. Use a StringBuilder `sb` to construct the path.
5. Iterate `totalMoves` times (sum of row and column):
   - If `hCount` is greater than 0:
     - Calculate the combination `comb` using DP table.
     - If `remainingK` is less than or equal to `comb`, append 'H' to `sb` and decrement `hCount`.
     - Otherwise, append 'V' to `sb`, decrement `vCount`, and subtract `comb` from `remainingK`.
   - If `hCount` is 0, append 'V' to `sb` and decrement `vCount`.
6. Return the path `sb.toString()`.

# Complexity
- Time complexity: O(row + col) to calculate DP table, O(row + col) to build the path.
- Space complexity: O(row + col) for the DP table and StringBuilder.

# Code
```
class Solution {
    fun kthSmallestPath(destination: IntArray, k: Int): String {
        val (row, col) = destination
        var hCount = col
        var vCount = row
        val totalMoves = row + col
        val dp = Array(totalMoves + 1) { IntArray(col + 1) }

        // Calculate binomial coefficients
        for (i in 0..totalMoves) {
            dp[i][0] = 1
            for (j in 1..minOf(i, col)) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
            }
        }

        val sb = StringBuilder()

        // Build the path
        var remainingK = k
        for (i in 0 until totalMoves) {
            if (hCount > 0) {
                val comb = dp[hCount + vCount - 1][hCount - 1]
                if (remainingK <= comb) {
                    sb.append('H')
                    hCount--
                } else {
                    sb.append('V')
                    vCount--
                    remainingK -= comb
                }
            } else {
                sb.append('V')
                vCount--
            }
        }

        return sb.toString()
    }
}

```