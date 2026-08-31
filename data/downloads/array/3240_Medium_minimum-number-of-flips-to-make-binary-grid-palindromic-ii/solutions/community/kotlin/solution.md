# Kotlin. Beats 100%. Commented

**Author:** anton-pogonets
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5586954/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5586954/)

---

![image.png](./images/0.png)

# Complexity
- Time complexity: $$O(n * m)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun minFlips(grid: Array<IntArray>): Int {
        val m = grid.lastIndex
        val n = grid[0].lastIndex

        val hMiddle = m / 2
        val vMiddle = n / 2

        var switchedTuples = false
        var oneTuples = 0
        var result = 0

        // Each (i, j) defines center-simetric quadrupel
        // a b
        // c d
        for (i in 0..hMiddle) {
            for (j in 0..vMiddle) {
                val endI = m - i
                val endJ = n - j

                val a = grid[i][j]
                val b = grid[i][endJ]
                val c = grid[endI][j]
                val d = grid[endI][endJ]

                val sum = a + b + c + d

                val center = (i == endI) &&  (j == endJ)
                val tuple  = (i == endI) xor (j == endJ)
                val quad   = (i != endI) &&  (j != endJ)

                // special case 1:
                // a, b, c, d points to the SAME cell and this cell == 1
                if (center && sum == 4) {
                    result++
                }

                // special case 2a:
                // a, b, c, d points to TWO different cells
                // and both of them == 1
                if (tuple && sum == 4) {
                    oneTuples++
                }
                
                // special case 2b:
                // a, b, c, d points to TWO different cells
                // and ONE them == 1
                if (tuple && sum == 2) {
                    result++
                    switchedTuples = true
                } 
                
                // base case:
                // a, b, c, d points to FOUR different cells
                if (quad) {
                    result += minOf(sum, 4 - sum)
                }
            }
        }

        // If we have odd count of 1-tuples 
        // and cant balance them already done flipping
        if (oneTuples % 2 == 1 && !switchedTuples) {
            result += 2
        }

        return result
    }
}
```