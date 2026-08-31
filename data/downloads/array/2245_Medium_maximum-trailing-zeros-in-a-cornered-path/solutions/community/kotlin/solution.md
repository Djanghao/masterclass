# Kotlin Solution

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2068113/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/2068113/)

---

```
    fun maxTrailingZeros(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        val twosLeftToRight = Array(m) { IntArray(n) }
        val fivesLeftToRight = Array(m) { IntArray(n) }
        val twosUpToDown = Array(m) { IntArray(n) }
        val fivesUpToDown = Array(m) { IntArray(n) }

        var maxTrailingZeros = 0
        for (i in grid.indices) {
            for (j in 0 until n) {
                var num = grid[i][j]
                var five = 0
                while (num % 5 == 0) {
                    five++
                    num /= 5
                }
                num = grid[i][j]
                var two = 0
                while (num % 2 == 0) {
                    two++
                    num /= 2
                }
                var leftTwo = two
                var leftFive = five
                var upTwo = two
                var upFive = five

                if (j != 0) {
                    leftTwo += twosLeftToRight[i][j - 1]
                    leftFive += fivesLeftToRight[i][j - 1]
                }
                twosLeftToRight[i][j] = leftTwo
                fivesLeftToRight[i][j] = leftFive
                if (i != 0) {
                    upTwo += twosUpToDown[i - 1][j]
                    upFive += fivesUpToDown[i - 1][j]
                }
                twosUpToDown[i][j] = upTwo
                fivesUpToDown[i][j] = upFive
            }
        }

        for (i in grid.indices) {
            for (j in 0 until n) {
                var upBeginning5 = 0
                var upBeginning2 = 0
                if (i != 0) {
                    upBeginning5 = fivesUpToDown[i - 1][0]
                    upBeginning2 = twosUpToDown[i - 1][0]
                }
                var downBeginnings5 = 0
                var downBeginnings2 = 0
                if (i != m - 1) {
                    downBeginnings5 = fivesUpToDown[m - 1][0] - fivesUpToDown[i][0]
                    downBeginnings2 = twosUpToDown[m - 1][0] - twosUpToDown[i][0]
                }

                var topEndings5 = 0
                var topEndings2 = 0
                if (i != 0) {
                    topEndings5 = fivesUpToDown[i - 1][n - 1]
                    topEndings2 = twosUpToDown[i - 1][n - 1]
                }
                var downEndings5 = 0
                var downEndings2 = 0
                if (i != m - 1) {
                    downEndings5 = fivesUpToDown[m - 1][n - 1] - fivesUpToDown[i][n - 1]
                    downEndings2 = twosUpToDown[m - 1][n - 1] - twosUpToDown[i][n - 1]
                }

                val leftSide5 = fivesLeftToRight[i][j]
                val leftSide2 = twosLeftToRight[i][j]

                var topSide5 = 0
                var topSide2 = 0
                if (i != 0) {
                    topSide5 = fivesUpToDown[i - 1][j]
                    topSide2 = twosUpToDown[i - 1][j]
                }

                val downSide5 = fivesUpToDown[m - 1][j] - fivesUpToDown[i][j]
                val downSide2 = twosUpToDown[m - 1][j] - twosUpToDown[i][j]

                var rightSide5 = 0
                var rightSide2 = 0
                if (j != 0) {
                    rightSide5 = fivesLeftToRight[i][n - 1] - fivesLeftToRight[i][j - 1]
                    rightSide2 = twosLeftToRight[i][n - 1] - twosLeftToRight[i][j - 1]
                }

                var min = Math.min(leftSide2 + topSide2, topSide5 + leftSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(rightSide2 + topSide2, topSide5 + rightSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(leftSide2 + downSide2, downSide5 + leftSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(rightSide2 + downSide2, downSide5 + rightSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(leftSide2 + upBeginning2, upBeginning5 + leftSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(leftSide2 + downBeginnings2, downBeginnings5 + leftSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(rightSide2 + downEndings2, downEndings5 + rightSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
                min = Math.min(rightSide2 + topEndings2, topEndings5 + rightSide5)
                maxTrailingZeros = Math.max(maxTrailingZeros, min)
            }
        }
        return maxTrailingZeros
    }
```