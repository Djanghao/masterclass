# Kotlin Straightforward Solution Beats 100%

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5954636/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5954636/)

---

# Code
```kotlin []
class Solution {
    fun isValid(n: Int, vararg seq: Int): Boolean  =
        n == seq.toSet().size

    fun checkValid(matrix: Array<IntArray>): Boolean {
        val n = matrix.size

        for (i in 0 until n)
            if (!isValid(n, *matrix[i]))
                return false

        for (j in 0 until n) {
            val col = (0 until n).map{ matrix[it][j] }.toIntArray()
            if (!isValid(n, *col)) return false
        }

        return true
    }
}
```